describe('Total', function() {

  beforeEach(function() {
      order = new Order() 
    })
  
    it('initializes with a total of 0', () => {
      expect(order.total.pre_tax_total).toEqual(0)
    })

    it('initializes with a tax amount of 0', () => {
      expect(order.total.tax).toEqual(0)
    })

    it('initializes with an amount owed of 0', () => {
      expect(order.total.amount_owed).toEqual(0)
    })

  describe('item_total', function(){
    it('calculates the item_total of an item', () => {
      order.total.item_total(2, "Cafe Latte")
      order.total.price(2, "Cafe Latte")
      expect(order.total.pre_tax_total).toEqual(9.5)
    })

    it('calculates the item_total of multiple items', () => {
      order.create_order(2, "Cafe Latte")
      order.create_order(1, "Tea")
      order.create_order(1, "Choc Mousse")
      expect(order.total.pre_tax_total).toEqual(21.35)
    })
  })

  describe('total_cost', function(){
    it('returns total amount owed', () => {
      order.create_order(2, "Cafe Latte")
      order.total.order_tax()
      order.total.total_cost()
      expect(order.total.amount_owed).toEqual(10.32)
    })

    it('calculates the amount owed on multiple items', () => {
      order.create_order(2, "Cafe Latte")
      order.create_order(1, "Tea")
      order.create_order(1, "Choc Mousse")
      order.total.order_tax()
      order.total.total_cost()
      expect(order.total.amount_owed).toEqual(23.19)
    })
  })

  describe('order_tax', function(){
    it('calculates the tax on an item', () => {
      order.total.item_total(2, "Cafe Latte")
      order.total.price(2, "Cafe Latte")
      order.total.order_tax()
      expect(order.total.tax).toEqual(.82)
    })

    it('calculates the tax on multiple items', () => {
      order.create_order(2, "Cafe Latte")
      order.create_order(1, "Tea")
      order.create_order(1, "Choc Mousse")
      order.total.order_tax()
      expect(order.total.tax).toEqual(1.84)
    })
  })
})