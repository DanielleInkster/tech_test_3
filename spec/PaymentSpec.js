describe('Payment', function() {
  
  beforeEach(function() {
    payment = new Payment();
  });

  it('initializes with a balance of 0', () => {
    expect(payment.received).toEqual(0)
  });

  it('initializes with change of 0', () => {
    expect(payment.change).toEqual(0)
  });
})