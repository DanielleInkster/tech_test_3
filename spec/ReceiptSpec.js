describe('Receipt', function() {
  
beforeEach(function() {
  order = new Order;
});

  describe('create_receipt', function(){
    it('creates a receipt for a completed order', () => {
      order.create_order(2, "Cafe Latte")
      order.receipt.create_receipt()
      expect(order.total.tax).toEqual(.82)
      expect(order.total.pre_tax_total).toEqual(9.5)
      expect(order.total.amount_owed).toEqual(10.32)
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
      order.receipt.create_receipt()
      // expect to print order
      expect(order.total.tax).toEqual(.82)
      expect(order.total.pre_tax_total).toEqual(9.5)
      expect(order.total.amount_owed).toEqual(10.32)
    });
  });
  
});
  