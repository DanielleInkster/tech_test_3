describe('Order', function() {

  beforeEach(function() {
    order = new Order() 
  }) 

  it('initializes with an empty order array', () => {
    expect(order.customerOrder).toEqual([])
  }) 

  describe('itemOrder', function(){
    it('records the amount, item name and price', () => {
      order.itemOrder(2, "Cafe Latte")
      expect(order.customerOrder[0]).toEqual(' Cafe Latte     2 x 4.75\n')
    }) 
 
    it('records multiple orders', () => {
      order.itemOrder(2, "Cafe Latte")
      order.itemOrder(1, "Tea")
      order.itemOrder(1, "Choc Mousse")
      expect(order.customerOrder).toEqual([' Cafe Latte     2 x 4.75\n', ' Tea     1 x 3.65\n', ' Choc Mousse     1 x 8.2\n'])
    }) 
  }) 
  describe('createOrder', function(){
    it('creates an order for an item', () => {
      order.createOrder(2, "Cafe Latte")
      expect(order.customerOrder[0]).toEqual(' Cafe Latte     2 x 4.75\n')
      expect(order.total.preTaxTotal).toEqual(9.5)
    }) 
  }) 
}) 