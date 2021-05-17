import { 
  replaceZeros,
  validatePin,
  validateWord,
  hasNumber,
  validateEmail, 
  validatePhoneNumber} from './ch-14.js';

describe('Testing challenge 1', () => {
  test('It should replace 0\'s with zero', () => {
    expect(replaceZeros('1230450')).toStrictEqual('123zero45zero');
  });
});

describe('Testing challenge 2', () => {
  test('It should return true if pin is 4 digits long', () => {
    expect(validatePin('1234')).toStrictEqual(true);
    expect(validatePin('123')).toStrictEqual(false);
    expect(validatePin('12345')).toStrictEqual(false);
  });
});

describe('Testing challenge 3', () => {
  test('It should return true if word is between 5-10 digits long', () => {
    expect(validateWord('abcd')).toStrictEqual(false);
    expect(validateWord('abcde')).toStrictEqual(true);
    expect(validateWord('abcdefghij')).toStrictEqual(true);
    expect(validateWord('abcdefghijk')).toStrictEqual(false);
  });
});

describe('Testing challenge 4', () => {
  test('It should return true if string has one or more letter followed by one or more digit', () => {
    expect(hasNumber('abcd')).toStrictEqual(false);
    expect(hasNumber('ab12')).toStrictEqual(true);
    expect(hasNumber('a1')).toStrictEqual(true);
    expect(hasNumber('12')).toStrictEqual(false);
  });
});

describe('Testing challenge 5', () => {
  test('It should validate an email', () => {
    expect(validateEmail('joe.joe@joe.com')).toStrictEqual(true);
    expect(validateEmail('joe12@joe12.com')).toStrictEqual(true);
    expect(validateEmail('joe@joe')).toStrictEqual(false);
    expect(validateEmail('joe')).toStrictEqual(false);
    expect(validateEmail('joe@joe.net')).toStrictEqual(true);
    expect(validateEmail('joe@joe.org')).toStrictEqual(true);
    expect(validateEmail('joe@joe.llama')).toStrictEqual(false);
    expect(validateEmail('joe#$(@joe.com')).toStrictEqual(false);
  });
});

describe('Testing challenge 6', () => {
  test.skip('It should validate a phone number', () => {
    expect(validatePhoneNumber('(555) 555-5555')).toStrictEqual(true);
    expect(validatePhoneNumber('(555)555 5555')).toStrictEqual(true);
    expect(validatePhoneNumber('555 555-5555')).toStrictEqual(false);
    expect(validatePhoneNumber('555-5555555')).toStrictEqual(false);
    expect(validatePhoneNumber('555-555 5555')).toStrictEqual(true);
    expect(validatePhoneNumber('555-555-5555')).toStrictEqual(true);
    expect(validatePhoneNumber('555 555 5555')).toStrictEqual(false);
    expect(validatePhoneNumber('555555-5555')).toStrictEqual(false);
    expect(validatePhoneNumber('5555555555')).toStrictEqual(false);
  });
});

// describe('Stretch challenge ', () => {
//   test('It should show html tags', () => {
//     expect(functionName('html')).toStrictEqual(true);
//   });
// });