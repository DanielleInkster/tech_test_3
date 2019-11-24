class Payment{
  constructor() {
    this.received = 0
    this.change = 0
  }

  amount_received(num){
    this.received += num
  }

  calculate_change(){
   let change =(this.received - order.total.amount_owed)
   this.change += (Math.round(change * 100) / 100)
   return this.change
  }

  create_bill(){
    order.total.order_tax()
    order.total.total_cost()
    return "Your order total is: $"+ order.total.amount_owed
  }


  pay_bill(num){
    this.amount_received(num)
    this.calculate_change()
    return 'Your change is $'+this.change
  }
}
