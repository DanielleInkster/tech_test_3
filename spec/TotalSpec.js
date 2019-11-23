describe('Total', function() {

  beforeEach(function() {
    receipt = new Receipt();
    });
  
    it('initializes with a total of 0', () => {
      expect(receipt.total.pre_tax_total).toEqual(0)
    });

    it('initializes with a tax amount of 0', () => {
      expect(receipt.total.tax).toEqual(0)
    });

    it('initializes with an amount owedd of 0', () => {
      expect(receipt.total.amount_owed).toEqual(0)
    });
})