import * as arithmetic from '../../../../core/07-mocks/arithmetic';
import * as calculator from '../../../../core/07-mocks/calculator';

jest.mock('../../../../core/07-mocks/arithmetic');

describe('The calculator', () => {
  it('calls arithmetic.add', () => {
    calculator.doAdd(1, 2);
    expect(arithmetic.add).toHaveBeenCalledWith(1, 2);
  });

  it('calls arithmetic.subtract', () => {
    calculator.doSubtract(1, 2);
    expect(arithmetic.subtract).toHaveBeenCalledWith(1, 2);
  });
});
