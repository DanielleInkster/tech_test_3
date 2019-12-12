class Discount{
  constructor() {
    this.originalAmount = 0
    this.discountApplied = false
  }

  orderDiscount( amt = .95){
    if (total.preTaxTotal > 50){
      this.discountApplied = true
      this.originalAmount = total.preTaxTotal
      let discount = ototal.preTaxTotal * amt
      total.preTaxTotal = Math.round(discount * 100) / 100
    } 
  }

  tenDiscount(item){
    let promoItem = menu.options[item] * .9
    return (Math.round(promoItem * 100) / 100)
  }
}