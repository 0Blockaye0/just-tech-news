const { test } = require('@jest/globals');
const { format_plural } = require('../utils/helpers');
const {format_date} = require('../utils/helpers');
const {format_url} = require('../utils/helpers');

test("format_date() returns a date string", () => {
  const date = new Date("2020-03-20 16:12:03");

  expect(format_date(date)).toBe("3/20/2020");
});


test("format_plural() pluralizes words if more than 1", () => {
  const word = "tiger"
  const amount = 2
  const singleWord= "lion"
  const theAmount = 1

  expect(format_plural(word, amount)).toBe("tigers");
  expect(format_plural(singleWord, theAmount)).toBe("lion");

})

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://test.com/page/1');
  const url2 = format_url('https://www.coolstuff.com/abcdefg/');
  const url3 = format_url('https://www.google.com?q=hello');

  expect(url1).toBe('test.com');
  expect(url2).toBe('coolstuff.com');
  expect(url3).toBe('google.com');
});