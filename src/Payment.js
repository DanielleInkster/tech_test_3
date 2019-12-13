class Payment{
  constructor(receipt = new Receipt) {
    this.received = 0
    this.change = 0
    this.receipt = receipt
  }

  amountReceived(num){
    this.received += num
  }

  calculateChange(){
   let change =(this.received - order.total.amountOwed)
   this.change += (Math.round(change * 100) / 100)
   return this.change
  }

  createBill(pct, amt){
    order.total.orderTax(pct)
    order.total.totalCost(amt)
    return "Your order total is: $"+ order.total.amountOwed
  }


  payBill(num){
    this.amountReceived(num)
    this.calculateChange()
    return 'Your change is $'+this.change
  }
}
