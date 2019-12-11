class Discount{
  constructor() {
    this.originalAmount = 0
    this.discountApplied = false
  }

  orderDiscount(){
    if (order.total.preTaxTotal > 50){
      this.discountApplied = true
      this.originalAmount = order.total.preTaxTotal
      let discount = order.total.preTaxTotal * .95
      order.total.preTaxTotal = Math.round(discount * 100) / 100
    } 
  }

  tenDiscount(item){
    let promoItem = order.menu.options[item] * .9
    return (Math.round(promoItem * 100) / 100)
  }
}