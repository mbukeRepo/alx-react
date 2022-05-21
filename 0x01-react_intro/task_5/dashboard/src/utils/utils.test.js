const {getFullYear, getFooterCopy, getLatestNotification} = require("./utils.js");


test('testing getLatestNotification', () => {
  expect(getLatestNotification())
  .toEqual('<strong>Urgent requirement</strong> - complete by EOD');
});

test('testing getFullYear', () => {
 expect(getFullYear()).toEqual(new Date().getFullYear());
});

test('testing getFooterCopy with true', () => {
  expect(getFooterCopy(true)).toEqual('Holberton School');
});

test('testing getFooterCopy with false', () => {
  expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
});
