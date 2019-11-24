describe('Order', function() {
  
  beforeEach(function() {
    order = new Order();
    receipt = new Receipt();
  });

  it('initializes with an empty order array', () => {
    expect(order.customer_order).toEqual([])
  });

  describe('item_order', function(){
    it('records the amount, item name and price', () => {
      order.item_order(2, "Cafe Latte")
      expect(order.customer_order[0]).toEqual('Cafe Latte     2 x 4.75')
    });
 
    it('records multiple orders', () => {
      order.item_order(2, "Cafe Latte")
      order.item_order(1, "Tea")
      order.item_order(1, "Choc Mousse")
      expect(order.customer_order).toEqual(['Cafe Latte     2 x 4.75', 'Tea     1 x 3.65', 'Choc Mousse     1 x 8.2'])
    });
  });
  describe('create_order', function(){
    it('creates an order for an item', () => {
      order.create_order(2, "Cafe Latte")
      expect(order.customer_order[0]).toEqual('Cafe Latte     2 x 4.75')
      expect(receipt.total.pre_tax_total).toEqual(9.5)
    });
  });
});