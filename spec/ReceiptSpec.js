describe('Receipt', function() {
  
beforeEach(function() {
  order = new Order 
}) 


// test for console log?
  // describe('printOrder', function(){
  //   it('prints the customers order', () => {
  //     receipt.createOrder(2, "Cafe Latte")
  //     expect(console.log).toEqual('Cafe Latte     2 x 4.75')
  //   }) 
  // }) 
  describe('printReceipt', function(){
    it('prints a receipt of an order', () => {
      order.createOrder(2, "Cafe Latte")
      order.payment.createBill()
      // expect to print order
      expect(order.total.tax).toEqual(.82)
      expect(order.total.preTaxTotal).toEqual(9.5)
      expect(order.total.amountOwed).toEqual(10.32)
    }) 
  }) 
  
}) 
  