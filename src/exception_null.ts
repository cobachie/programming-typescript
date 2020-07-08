function ask() {
  // return prompt('When is your birthday ?');
  // return '19780927';
  return '21000701';
}

/**
 *
 * @param birthday
 * @throws {InvalidDateFormatError} ユーザーが誕生日を間違って入力した
 * @throws {DateIsInTheFutureError} ユーザーが未来の誕生日を入力した
 */
function parse(birthday: string): Date {
  let date = new Date(birthday);
  if (!isValid(date)) {
    throw new RangeError('Enter a date in the form YYYY/MM/DD');
  }
  return date;
}

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  );
}

try {
  let date = parse(ask());
  console.info('Date is', date.toISOString());
} catch (e) {
  console.error(e.message);
}
