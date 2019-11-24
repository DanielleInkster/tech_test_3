describe('Payment', function() {

  beforeEach(() => {
    order = new Order()
  })

  describe('order_discount', function(){
    it('gives a 5% discount on pre-tax orders over 50 dollars ', () => {
      order.create_order(5, "Tiramisu")
      order.discount.order_discount()
      expect(order.total.pre_tax_total).toEqual(54.15)
    })

    it(' does not give discount on pre-tax orders under 50 dollars ', () => {
      order.create_order(4, "Tiramisu")
      order.discount.order_discount()
      expect(order.total.pre_tax_total).toEqual(45.6)
    })
  })

  describe('ten_discount', function(){
    it('gives a 10% discount on promo item ', () => {
      order.create_order(1, "Blueberry Muffin")
      expect(order.total.pre_tax_total).toEqual(3.65)
    })

    it('does not give a discount on non-promo item ', () => {
      order.create_order(1, "Tea")
      expect(order.total.pre_tax_total).toEqual(3.65)
    })
  })
})