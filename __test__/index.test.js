import reverse from '../src/index';

test('reverse', () => {
  const str = 'hello';
  expect(reverse(str)).toEqual('olleh');
  expect(reverse('')).toEqual('');
})