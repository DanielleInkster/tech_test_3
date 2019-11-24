describe('Total', function() {

  beforeEach(function() {
    total = new Total();
    });
  
    it('initializes with a total of 0', () => {
      expect(total.pre_tax_total).toEqual(0)
    });

    it('initializes with a tax amount of 0', () => {
      expect(total.tax).toEqual(0)
    });

    it('initializes with an amount owed of 0', () => {
      expect(total.amount_owed).toEqual(0)
    });

  describe('item_total', function(){
    it('calculates the item_total of an item', () => {
      total.item_total(2, "Cafe Latte")
      total.price(2, "Cafe Latte")
      expect(total.pre_tax_total).toEqual(9.5)
    });

    it('calculates the item_total of multiple items', () => {
      total.item_total(2, "Cafe Latte")
      total.price(2, "Cafe Latte")
      total.item_total(1, "Tea")  
      total.price(1, "Tea")
      total.item_total(1, "Choc Mousse")
      total.price(1, "Choc Mousse")
      expect(total.pre_tax_total).toEqual(21.35)
    });
  });

  describe('total_cost', function(){
    it('returns total amount owed', () => {
      total.item_total(2, "Cafe Latte")
      total.price(2, "Cafe Latte")
      total.order_tax()
      expect(total.total_cost()).toEqual(10.32)
    });

    it('calculates the amount owed on multiple items', () => {
      total.item_total(2, "Cafe Latte")
      total.price(2, "Cafe Latte")
      total.item_total(1, "Tea")  
      total.price(1, "Tea")
      total.item_total(1, "Choc Mousse")
      total.price(1, "Choc Mousse")
      total.order_tax()
      expect(total.total_cost()).toEqual(23.19)
    });
  });

  describe('order_tax', function(){
    it('calculates the tax on an item', () => {
      total.item_total(2, "Cafe Latte")
      total.price(2, "Cafe Latte")
      total.order_tax()
      expect(total.tax).toEqual(.82)
    });

    it('calculates the tax on multiple items', () => {
      total.item_total(2, "Cafe Latte")
      total.price(2, "Cafe Latte")
      total.item_total(1, "Tea")  
      total.price(1, "Tea")
      total.item_total(1, "Choc Mousse")
      total.price(1, "Choc Mousse")
      total.order_tax()
      expect(total.tax).toEqual(1.84)
    });
  });

  
})