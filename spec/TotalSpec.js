describe('Total', function() {

  beforeEach(function() {
      order = new Order() 
    })
  
    it('initializes with a total of 0', () => {
      expect(order.total.preTaxTotal).toEqual(0)
    })

    it('initializes with a tax amount of 0', () => {
      expect(order.total.tax).toEqual(0)
    })

    it('initializes with an amount owed of 0', () => {
      expect(order.total.amountOwed).toEqual(0)
    })

  describe('itemTotal', function(){
    it('calculates the itemTotal of an item', () => {
      order.total.itemTotal(2, "Cafe Latte")
      order.total.price(2, "Cafe Latte")
      expect(order.total.preTaxTotal).toEqual(9.5)
    })

    it('calculates the itemTotal of multiple items', () => {
      order.createOrder(2, "Cafe Latte")
      order.createOrder(1, "Tea")
      order.createOrder(1, "Choc Mousse")
      expect(order.total.preTaxTotal).toEqual(21.35)
    })
  })

  describe('totalCost', function(){
    it('returns total amount owed', () => {
      order.createOrder(2, "Cafe Latte")
      order.total.orderTax()
      order.total.totalCost()
      expect(order.total.amountOwed).toEqual(10.32)
    })

    it('calculates the amount owed on multiple items', () => {
      order.createOrder(2, "Cafe Latte")
      order.createOrder(1, "Tea")
      order.createOrder(1, "Choc Mousse")
      order.total.orderTax()
      order.total.totalCost()
      expect(order.total.amountOwed).toEqual(23.19)
    })
  })

  describe('orderTax', function(){
    it('calculates the tax on an item', () => {
      order.total.itemTotal(2, "Cafe Latte")
      order.total.price(2, "Cafe Latte")
      order.total.orderTax()
      expect(order.total.tax).toEqual(.82)
    })

    it('calculates the tax on multiple items', () => {
      order.createOrder(2, "Cafe Latte")
      order.createOrder(1, "Tea")
      order.createOrder(1, "Choc Mousse")
      order.total.orderTax()
      expect(order.total.tax).toEqual(1.84)
    })
  })
})