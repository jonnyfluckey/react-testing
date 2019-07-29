
describe('The question list', () => {
  beforeEach(() => {
    console.log("Before each!");
  });

  beforeAll(() => {
    console.log("Before all!");
  })

  afterEach(() => {
    console.log("After each!");
  })

  afterAll(() => {
    console.log("After all!");
  })
  it("should describe a list of items", () => {
     expect(40+2).toEqual(42); 
  });

  it("should describe a list of things", () => {
    expect(40+2).toEqual(42); 
 });
});