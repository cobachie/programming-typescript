function ask() {
  // return prompt('When is your birthday ?');
  return '1978-9-27';
}

function parse(birthday: string): Date | null {
  let date = new Date(birthday);
  if (!isValid(date)) {
    return null;
  }
  return date;
}

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  );
}

let date = parse(ask());
if (date) {
  console.info('Date is', date.toISOString());
} else {
  console.error('Error parsing date for some reason.');
}
