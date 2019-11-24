describe('Payment', function() {
  
  beforeEach(function() {
    order = new Order();
    pay = new Payment();
  });

  it('initializes with a balance of 0', () => {
    expect(pay.received).toEqual(0)
  });

  it('initializes with change of 0', () => {
    expect(pay.change).toEqual(0)
  });

  describe('amount_received', function(){
    it('stores how much the customer has paid', () => {
    pay.amount_received(10)
    expect(pay.received).toEqual(10)
    })
  })

  describe('calculate_change', function(){
    it('calculates the difference between paid and owed', () => {
    order.create_order(1,"Tea")
    order.receipt.create_receipt()
    order.total.payment.amount_received(10)
    order.total.payment.calculate_change()
    expect(order.total.payment.change).toEqual(6.03)
    })
  })
})