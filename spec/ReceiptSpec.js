describe('Receipt', function() {
let receipt

beforeEach(function() {
  receipt = new Receipt();
});

  it('initializes with a total of 0', () => {
    expect(receipt.total).toEqual(0)
  });

  it('initializes with an empty order array', () => {
    expect(receipt.customer_order).toEqual([])
  });


  describe('item_order', function(){
    it('records the amount, item name and price', () => {
      receipt.item_order(2, "Cafe Latte")
      expect(receipt.customer_order[0]).toEqual('Cafe Latte     2 x 4.75')
    });
 
    it('records multiple orders', () => {
      receipt.item_order(2, "Cafe Latte")
      receipt.item_order(1, "Tea")
      receipt.item_order(1, "Choc Mousse")
      expect(receipt.customer_order).toEqual(['Cafe Latte     2 x 4.75', 'Tea     1 x 3.65', 'Choc Mousse     1 x 8.2'])
    });
  });

  describe('item_total', function(){
    it('calculates the item_total of an item', () => {
      receipt.item_total(2, "Cafe Latte")
      receipt.price(2, "Cafe Latte")
      expect(receipt.total).toEqual(9.5)
    });

    it('calculates the item_total of multiple items', () => {
      receipt.item_total(2, "Cafe Latte")
      receipt.price(2, "Cafe Latte")
      receipt.item_total(1, "Tea")  
      receipt.price(1, "Tea")
      receipt.item_total(1, "Choc Mousse")
      receipt.price(1, "Choc Mousse")
      expect(receipt.total).toEqual(21.35)
    });
  });

  describe('create_order', function(){
    it('creates an order for an item', () => {
      receipt.create_order(2, "Cafe Latte")
      expect(receipt.customer_order[0]).toEqual('Cafe Latte     2 x 4.75')
      expect(receipt.total).toEqual(9.5)
    });
  });

  describe('order_tax', function(){
    it('calculates the tax on an item', () => {
      receipt.item_total(2, "Cafe Latte")
      receipt.price(2, "Cafe Latte")
      receipt.order_tax()
      expect(receipt.tax).toEqual(.82)
    });

    it('calculates the tax on multiple items', () => {
      receipt.item_total(2, "Cafe Latte")
      receipt.price(2, "Cafe Latte")
      receipt.item_total(1, "Tea")  
      receipt.price(1, "Tea")
      receipt.item_total(1, "Choc Mousse")
      receipt.price(1, "Choc Mousse")
      receipt.order_tax()
      expect(receipt.tax).toEqual(1.84)
    });
  });

  describe('total_cost', function(){
    it('returns total amount owed', () => {
      receipt.item_total(2, "Cafe Latte")
      receipt.price(2, "Cafe Latte")
      receipt.order_tax()
      expect(receipt.total_cost()).toEqual(10.32)
    });

    it('calculates the amount owed on multiple items', () => {
      receipt.item_total(2, "Cafe Latte")
      receipt.price(2, "Cafe Latte")
      receipt.item_total(1, "Tea")  
      receipt.price(1, "Tea")
      receipt.item_total(1, "Choc Mousse")
      receipt.price(1, "Choc Mousse")
      receipt.order_tax()
      expect(receipt.total_cost()).toEqual(23.19)
    });
  });

  describe('create_receipt', function(){
    it('creates a receipt for a completed order', () => {
      receipt.create_order(2, "Cafe Latte")
      receipt.create_receipt()
      expect(receipt.tax).toEqual(.82)
      expect(receipt.total).toEqual(9.5)
      expect(receipt.amount_owed).toEqual(10.32)
    });
  });
// test for console log?
  // describe('print_order', function(){
  //   it('prints the customers order', () => {
  //     receipt.create_order(2, "Cafe Latte")
  //     expect(console.log).toEqual('Cafe Latte     2 x 4.75')
  //   });
  // });
  describe('print_receipt', function(){
    it('prints a receipt of an order', () => {
      receipt.create_order(2, "Cafe Latte")
      receipt.create_receipt()
      // expect to print order
      expect(receipt.tax).toEqual(.82)
      expect(receipt.total).toEqual(9.5)
      expect(receipt.amount_owed).toEqual(10.32)
    });
  });
  
});
  