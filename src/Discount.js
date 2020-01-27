class Discount{
  constructor() {
    this.originalAmount = 0
    this.discountApplied = false
    this.discountedAmount = 0
  }

  orderDiscount( amt = .95, preTaxTotal){
    if (preTaxTotal > 50){
      this.discountApplied = true
      this.originalAmount += preTaxTotal
      let discount = preTaxTotal * amt
      this.discountedAmount = Math.round(discount * 100) / 100
    } 
    else {
      this.discountedAmount = preTaxTotal
    }
  }

  tenDiscount(item){
    let promoItem = order.menu.options[item] * .9
    return (Math.round(promoItem * 100) / 100)
  }
}