xdescribe('Use case', () => {
  beforeAll(() => {
    console.log('Before all test');
  });
  afterAll(() => {
    console.log('After all test');
  });
  beforeEach(() => {
    console.log('Before each test');
  });
  afterEach(() => {
    console.log('After each test');
  });
  it('Able to do something 1', () => {
    console.log('Test 1');
    expect(true).toBe(true);
  });
  it('Able to do something 2', () => {
    console.log('Test 2');
    expect(true).toBe(true);
  });
});
