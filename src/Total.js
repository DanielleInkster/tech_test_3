class Total{
constructor() {
  this.tax = 0
  this.preTaxTotal = 0
  this.amountOwed= 0
  }

  itemPrice(item){
    if(item.includes("Muffin")){
    return order.discount.tenDiscount(item)
    }else{
    return order.menu.options[item]
    }
  }

  itemTotal(num,item){
    return num * this.itemPrice(item)
  }

  price(num,item){
    this.preTaxTotal +=this.itemTotal(num,item)
  }

  orderTax(){ 
    let tax = (this.preTaxTotal * 0.0864)
    this.tax = (Math.round(tax * 100) / 100)
  }

  totalCost(){
    order.discount.orderDiscount()
    let final = this.preTaxTotal + this.tax
    this.amountOwed += Math.round(final * 100) / 100
  }
}
