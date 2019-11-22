describe('Receipt', function() {
let receipt

beforeEach(function() {
  receipt = new Receipt();
});

  it('initializes with a total of 0', () => {
    expect(receipt.total).toEqual(0)
  });

});
  