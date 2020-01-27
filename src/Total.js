class Total{
constructor(discount = new Discount, payment = new Payment, menu = new Menu ) {
  this.tax = 0
  this.preTaxTotal = 0
  this.amountOwed= 0
  this.discount = discount
  this.payment = payment
  this.menu = menu
  }

  itemPrice(item){
    if(item.includes("Muffin")){
    return this.discount.tenDiscount(item)
    }else{
    return this.menu.options[item]
    }
  }

  itemTotal(num,item){
    return num * this.itemPrice(item)
  }

  price(num,item){
    this.preTaxTotal +=this.itemTotal(num,item)
  }

  orderTax(pct=0.0864){ 
    let tax = (this.preTaxTotal * pct)
    this.tax = (Math.round(tax * 100) / 100)

  }

  totalCost(amt, preTaxTotal = this.preTaxTotal){
    this.discount.orderDiscount(amt, preTaxTotal)
    let final = this.discount.discountedAmount + this.tax
    this.amountOwed += Math.round(final * 100) / 100
    return this.amountOwed
  }

  createBill(pct, amt, preTaxTotal){
    this.orderTax(pct)
    this.totalCost(amt, preTaxTotal)
    return this.amountOwed
  }

}
