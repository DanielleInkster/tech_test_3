describe('Payment', function() {

  beforeEach(function() {
    order = new Order 
   
  }) 

  it('initializes with a balance of 0', () => {
    expect(order.payment.received).toEqual(0)
  }) 

  it('initializes with change of 0', () => {
    expect(order.payment.change).toEqual(0)
  }) 

  describe('amount_received', function(){
    it('stores how much the customer has paid', () => {
    order.payment.amount_received(10)
    expect(order.payment.received).toEqual(10)
    })
  })

  describe('calculate_change', function(){
    it('calculates the difference between paid and owed', () => {
    order.create_order(1,"Tea")
    order.payment.create_bill()
    order.payment.amount_received(10)
    order.payment.calculate_change()
    expect(order.payment.change).toEqual(6.03)
    })
  })

  describe('create_bill', function(){
    it('creates a bill for a completed order', () => {
      order.create_order(2, "Cafe Latte")
      order.payment.create_bill()
      expect(order.total.tax).toEqual(.82)
      expect(order.total.pre_tax_total).toEqual(9.5)
      expect(order.total.amount_owed).toEqual(10.32)
    }) 
  }) 

  describe('pay_bill', function(){
    it('pays bill amount', () => {
      order.create_order(2, "Cafe Latte")
      order.payment.create_bill()
      order.payment.pay_bill(10.50)
      expect(order.payment.received).toEqual(10.50)
      expect(order.payment.change).toEqual(.18)
    }) 
  }) 

})