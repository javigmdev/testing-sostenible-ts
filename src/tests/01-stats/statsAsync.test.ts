import { average, sum } from '../../core/01-stats/statsAsync';

describe('Stats async should', () => {
  it('calculates the sum of all elements of the array (async)', async () => {
    const result = await sum([1, 2, 3]);
    const expected = 6;
    expect(expected).toBe(result);
  });

  it('calculates the average of all elements of the array (async)', async () => {
    const result = await average([1, 2, 3]);
    const expected = 2;
    expect(expected).toBe(result);
  });
});
