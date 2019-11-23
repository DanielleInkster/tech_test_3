describe('Total', function() {

  beforeEach(function() {
    receipt = new Receipt();
    });
  
    it('initializes with a total of 0', () => {
      expect(receipt.total.pre_tax_total).toEqual(0)
    });

  describe('item_total', function(){
    it('calculates the item_total of an item', () => {
      receipt.total.item_total(2, "Cafe Latte")
      receipt.total.price(2, "Cafe Latte")
      expect(receipt.total.pre_tax_total).toEqual(9.5)
    });

    it('calculates the item_total of multiple items', () => {
      receipt.total.item_total(2, "Cafe Latte")
      receipt.total.price(2, "Cafe Latte")
      receipt.total.item_total(1, "Tea")  
      receipt.total.price(1, "Tea")
      receipt.total.item_total(1, "Choc Mousse")
      receipt.total.price(1, "Choc Mousse")
      expect(receipt.total.pre_tax_total).toEqual(21.35)
    });
  })
})