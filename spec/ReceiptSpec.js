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


  describe('order', function(){
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
  });

  describe('price', function(){
    it('calculates the price of an item', () => {
      receipt.price(2, "Cafe Latte")
      expect(receipt.total).toEqual(9.5)
    });

    it('calculates the price of multiple items', () => {
      receipt.price(2, "Cafe Latte")
      receipt.price(1, "Tea")
      receipt.price(1, "Choc Mousse")
      expect(receipt.total).toEqual(21.35)
    });
  });

  describe('order_tax', function(){
    it('calculates the tax on an item', () => {
      receipt.price(2, "Cafe Latte")
      receipt.order_tax()
      expect(receipt.tax).toEqual(.82)
    });

    it('calculates the tax on multiple items', () => {
      receipt.price(2, "Cafe Latte")
      receipt.price(1, "Tea")
      receipt.price(1, "Choc Mousse")
      receipt.order_tax()
      expect(receipt.tax).toEqual(1.84)
    });
  });

  describe('total_cost', function(){
    it('returns total amount owed', () => {
      receipt.price(2, "Cafe Latte")
      receipt.order_tax()
      expect(receipt.total_cost()).toEqual(10.32)
    });

    it('calculates the amount owed on multiple items', () => {
      receipt.price(2, "Cafe Latte")
      receipt.price(1, "Tea")
      receipt.price(1, "Choc Mousse")
      receipt.order_tax()
      expect(receipt.total_cost()).toEqual(23.19)
    });
  });



});
  