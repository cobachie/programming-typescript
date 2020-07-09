function ask() {
  let result = prompt('When is your birthday ?');
  result = '19780927';
  if (result === null) {
    return [];
  }
  return [result];
}

/**
 *
 * @param birthday
 */
function parse(birthday: string): Date[] {
  let date = new Date(birthday);
  if (!isValid(date)) {
    return [];
  }
  return [date];
}

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  );
}

function flatten<T>(array: T[][]): T[] {
  return Array.prototype.concat.apply([], array);
}

interface Option<T> {
  flatMap<U>(f: (value: T) => None): None;
  flatMap<U>(f: (value: T) => Option<U>): Option<U>;
  getOrElse(value: T): T;
}

class Some<T> implements Option<T> {
  constructor(private value: T) {}

  flatMap<U>(f: (value: T) => None): None;
  flatMap<U>(f: (value: T) => Some<U>): Some<U>;
  flatMap<U>(f: (value: T) => Option<U>): Option<U> {
    return f(this.value);
  }

  getOrElse(): T {
    return this.value;
  }
}

class None implements Option<never> {
  flatMap(): None {
    return this;
  }

  getOrElse<U>(value: U): U {
    return value;
  }
}

ask()
  .flatMap(parse)
  .flatMap((date) => new Some(date.toISOString()))
  .forEach((date) => new Some('Date is', date))
  .getOrElse('Error parsing date for some reason.');
// let date = parse(ask());
// date.map((_) => _.toISOString()).forEach((_) => console.info('Date is', _));
