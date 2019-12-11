class Payment{
  constructor() {
    this.received = 0
    this.change = 0
  }

  amountReceived(num){
    this.received += num
  }

  calculateChange(){
   let change =(this.received - order.total.amountOwed)
   this.change += (Math.round(change * 100) / 100)
   return this.change
  }

  createBill(){
    order.total.orderTax()
    order.total.totalCost()
    return "Your order total is: $"+ order.total.amountOwed
  }


  payBill(num){
    this.amountReceived(num)
    this.calculateChange()
    return 'Your change is $'+this.change
  }
}
