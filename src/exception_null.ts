function ask() {
  // return prompt('When is your birthday ?');
  // return '19780927';
  return '2100/07/01';
}

/**
 *
 * @param birthday
 */
function parse(birthday: string): Date | Error {
  let date = new Date(birthday);
  if (!isValid(date)) {
    return new Error('Enter a date in the form YYYY/MM/DD');
  }
  if (date.getTime() > Date.now()) {
    return new Error('Are you a timeload?');
  }
  return date;
}

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  );
}

let result = parse(ask());
if (result instanceof Error) {
  console.error(result.message);
} else {
  console.info('Date is', result.toISOString());
}
