describe('Payment', function() {

  beforeEach(function() {
    order = new Order 
   
  }) 

  it('initializes with a balance of 0', () => {
    expect(order.total.payment.received).toEqual(0)
  }) 

  it('initializes with change of 0', () => {
    expect(order.total.payment.change).toEqual(0)
  }) 

  describe('amountReceived', function(){
    it('stores how much the customer has paid', () => {
    order.total.payment.amountReceived(10)
    expect(order.total.payment.received).toEqual(10)
    })
  })

  describe('calculateChange', function(){
    it('calculates the difference between paid and owed', () => {
    order.createOrder(1,"Tea")
    order.total.createBill()
    order.total.payment.amountReceived(10)
    order.total.payment.calculateChange()
    expect(order.total.payment.change).toEqual(6.03)
    })
  })

  describe('createBill', function(){
    it('creates a bill for a completed order', () => {
      order.createOrder(2, "Cafe Latte")
      order.total.createBill()
      expect(order.total.tax).toEqual(.82)
      expect(order.total.preTaxTotal).toEqual(9.5)
      expect(order.total.amountOwed).toEqual(10.32)
    }) 
  }) 

  describe('payBill', function(){
    it('pays bill amount', () => {
      order.createOrder(2, "Cafe Latte")
      order.total.createBill()
      order.total.payment.payBill(10.50)
      expect(order.total.payment.received).toEqual(10.50)
      expect(order.total.payment.change).toEqual(.18)
    }) 
  }) 

})