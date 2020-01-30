class Payment{
  constructor() {
    this.received = 0
    this.change = 0
  }

  amountReceived(num){
    this.received += (Math.round(num * 100) / 100)
  }

  calculateChange(amount = order.total.amountOwed){
   if(this.received < amount){
     throw("Payment must equal or exceed order total.")
   } else if(this.received >= amount){
   let change =(this.received - amount)
   this.change += (Math.round(change * 100) / 100)
   return this.change
   }
  }

  payBill(num, amount){
    this.amountReceived(num)
    this.calculateChange(amount)
    return 'Your change is $'+this.change
  }
}
