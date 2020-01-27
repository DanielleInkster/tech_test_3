class Payment{
  constructor(receipt = new Receipt) {
    this.received = 0
    this.change = 0
    this.receipt = receipt
  }

  amountReceived(num){
    this.received += num
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
