describe('Payment', function() {

  beforeEach(function() {
    order = new Order;
   
  });

  it('initializes with a balance of 0', () => {
    expect(order.payment.received).toEqual(0)
  });

  it('initializes with change of 0', () => {
    expect(order.payment.change).toEqual(0)
  });

  describe('amount_received', function(){
    it('stores how much the customer has paid', () => {
    order.payment.amount_received(10)
    expect(order.payment.received).toEqual(10)
    })
  })

  describe('calculate_change', function(){
    it('calculates the difference between paid and owed', () => {
    order.create_order(1,"Tea")
    order.receipt.create_receipt()
    order.payment.amount_received(10)
    order.payment.calculate_change()
    expect(order.payment.change).toEqual(6.03)
    })
  })
})