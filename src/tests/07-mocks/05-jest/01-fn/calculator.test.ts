import * as arithmetic from '../../../../core/07-mocks/arithmetic';
import * as calculator from '../../../../core/07-mocks/calculator';

describe('The calculator', () => {
  (arithmetic as any).add = jest.fn(arithmetic.add);
  (arithmetic as any).subtract = jest.fn(arithmetic.subtract);

  test('calls arithmetic.add', () => {
    const result = calculator.doAdd(1, 2);
    expect(arithmetic.add).toHaveBeenCalledWith(1, 2);
    expect(result).toBe(3);
  });

  test('calls arithmetic.subtract', () => {
    const result = calculator.doSubtract(1, 2);
    expect(arithmetic.subtract).toHaveBeenCalledWith(1, 2);
    expect(result).toBe(-1);
  });
});
