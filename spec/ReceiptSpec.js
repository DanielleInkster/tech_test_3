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

  it('records multiple orders', () => {
    receipt.order(2, "Cafe Latte")
    receipt.order(1, "Tea")
    receipt.order(1, "Choc Mousse")
    expect(receipt.customer_order).toEqual(['2 x Cafe Latte', '1 x Tea', '1 x Choc Mousse'])
  });

  it('calculates the value of an order', () => {
    receipt.price(2, "Cafe Latte")
    expect(receipt.total).toEqual(9.5)
  });

  it('calculates the value of multiple orders', () => {
    receipt.price(2, "Cafe Latte")
    receipt.price(1, "Tea")
    receipt.price(1, "Choc Mousse")
    expect(receipt.total).toEqual(21.35)
  });



});
  