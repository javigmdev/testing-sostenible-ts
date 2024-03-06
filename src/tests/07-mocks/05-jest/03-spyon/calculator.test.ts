import * as arithmetic from '../../../../core/07-mocks/arithmetic';
import * as calculator from '../../../../core/07-mocks/calculator';

describe('The calculator', () => {
  it('calls arithmetic add', () => {
    const mockedAdd = jest.spyOn(arithmetic, 'add');
    expect(calculator.doAdd(1, 2)).toBe(3);
    expect(mockedAdd).toHaveBeenCalledWith(1, 2);
  });
  it('calls arithmetic subtract', () => {
    const mockedSubtract = jest.spyOn(arithmetic, 'subtract');
    expect(calculator.doSubtract(1, 2)).toBe(-1);
    expect(mockedSubtract).toHaveBeenCalledWith(1, 2);
  });
});

describe('The calculator', () => {
  it('calls arithmetic add', () => {
    const mockedAdd = jest.spyOn(arithmetic, 'add');
    mockedAdd.mockImplementation(() => 3);
    expect(calculator.doAdd(1, 2)).toBe(3);
    expect(mockedAdd).toHaveBeenCalledWith(1, 2);
  });
  it('calls arithmetic subtract', () => {
    const mockedSubtract = jest.spyOn(arithmetic, 'subtract');
    mockedSubtract.mockImplementation(() => -1);
    expect(calculator.doSubtract(1, 2)).toBe(-1);
    expect(mockedSubtract).toHaveBeenCalledWith(1, 2);
  });
});
