describe('Receipt', function() {
let receipt

beforeEach(function() {
  receipt = new Receipt();
});

  it('initializes with a total of 0', () => {
    expect(receipt.total).toEqual(0)
  });

  it('initializes with an empty order array', () => {
    expect(receipt.customer_order).toEqual([])
  });

  it('records an order', () => {
    receipt.order(2, "Cafe Latte")
    expect(receipt.customer_order[0]).toEqual('2 x Cafe Latte')
  });



});
  