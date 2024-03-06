import { toUpperCamelCase } from '../../core/03-kata-camelcase/camelCase';

describe('Camel case converter', () => {
  it('Allows empty text', () => {
    expect(toUpperCamelCase('')).toBe('');
  });
  it('Allows capitalized word', () => {
    expect(toUpperCamelCase('Foo')).toBe('Foo');
  });
  it('Joins the capitalized words that are separated by spaces', () => {
    expect(toUpperCamelCase('Foo Bar')).toBe('FooBar');
  });
  it('Joins the capitalized words that are separated by hyphens', () => {
    expect(toUpperCamelCase('Foo_Bar-Foo')).toBe('FooBarFoo');
  });
  it('Converts the first character of one word to uppercase', () => {
    expect(toUpperCamelCase('foo')).toBe('Foo');
  });
  it('Converts the first character of each word to uppercase', () => {
    expect(toUpperCamelCase('foo_bar_foo')).toBe('FooBarFoo');
  });
});
