describe('Receipt', function() {

beforeEach(function() {
  receipt = new Receipt();
  order = new Order();
});

  describe('order_tax', function(){
    it('calculates the tax on an item', () => {
      receipt.total.item_total(2, "Cafe Latte")
      receipt.total.price(2, "Cafe Latte")
      receipt.total.order_tax()
      expect(receipt.total.tax).toEqual(.82)
    });

    it('calculates the tax on multiple items', () => {
      receipt.total.item_total(2, "Cafe Latte")
      receipt.total.price(2, "Cafe Latte")
      receipt.total.item_total(1, "Tea")  
      receipt.total.price(1, "Tea")
      receipt.total.item_total(1, "Choc Mousse")
      receipt.total.price(1, "Choc Mousse")
      receipt.total.order_tax()
      expect(receipt.total.tax).toEqual(1.84)
    });
  });

  describe('create_receipt', function(){
    it('creates a receipt for a completed order', () => {
      order.create_order(2, "Cafe Latte")
      receipt.create_receipt()
      expect(receipt.total.tax).toEqual(.82)
      expect(receipt.total.pre_tax_total).toEqual(9.5)
      expect(receipt.total.amount_owed).toEqual(10.32)
    });
  });
// test for console log?
  // describe('print_order', function(){
  //   it('prints the customers order', () => {
  //     receipt.create_order(2, "Cafe Latte")
  //     expect(console.log).toEqual('Cafe Latte     2 x 4.75')
  //   });
  // });
  describe('print_receipt', function(){
    it('prints a receipt of an order', () => {
      order.create_order(2, "Cafe Latte")
      receipt.create_receipt()
      // expect to print order
      expect(receipt.total.tax).toEqual(.82)
      expect(receipt.total.pre_tax_total).toEqual(9.5)
      expect(receipt.total.amount_owed).toEqual(10.32)
    });
  });
  
});
  