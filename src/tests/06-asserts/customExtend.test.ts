declare namespace jest {
  interface Matchers<R> {
    customToBe(value): CustomMatcherResult;
    isExactly<T>(...values: T[]): CustomMatcherResult;
  }
}

expect.extend({
  customToBe(expected, received) {
    return {
      pass: expected === received,
      message: () => `Expected: ${expected} \nReceived: ${received}`,
    };
  },
  isExactly<T>(expectedList: T[], ...values: T[]) {
    const haveSameLength = expectedList.length === values.length;

    const haveSameElements = () =>
      values.every((value, i) => value === expectedList[i]);

    return {
      pass: haveSameLength && haveSameElements(),
      message: () => `Expected: ${expectedList} \nReceived: ${values}`,
    };
  },
});

test('custom assertion (extending)', () => {
  const list = [10, 20, 30];
  expect(list).isExactly(10, 20, 30);
});
