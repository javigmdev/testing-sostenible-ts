test('custom assertions (grouping)', () => {
  const list = [{ value: 10 }, { value: 20 }, { value: 30 }];

  expectThatList(list).isExactly({ value: 10 }, { value: 20 }, { value: 30 });
});

function expectThatList<T>(list: T[]) {
  return listMatchers(list);
}

function listMatchers<T>(list: T[]) {
  return {
    isExactly(...items: T[]) {
      expect(items.length).toBe(list.length);
      items.forEach((_, i) => {
        expect(items[i]).toEqual(list[i]);
      });
    },
  };
}
