describe('Payment', function() {

  beforeEach(() => {
    order = new Order()
    
  })

  describe('orderDiscount', function(){
    it('gives a 5% discount on pre-tax orders over 50 dollars ', () => {
      order.createOrder(5, "Tiramisu")
      order.total.totalCost()
      expect(order.total.discount.discountedAmount).toEqual(54.15)
    })

    it(' does not give discount on pre-tax orders under 50 dollars ', () => {
      order.createOrder(4, "Tiramisu")
      order.total.discount.orderDiscount()
      expect(order.total.preTaxTotal).toEqual(45.6)
    })
  })

  describe('tenDiscount', function(){
    it('gives a 10% discount on promo item ', () => {
      order.createOrder(1, "Blueberry Muffin")
      expect(order.total.preTaxTotal).toEqual(3.65)
    })

    it('does not give a discount on non-promo item ', () => {
      order.createOrder(1, "Tea")
      expect(order.total.preTaxTotal).toEqual(3.65)
    })
  })
})