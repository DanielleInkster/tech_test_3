class Receipt{
constructor() {
  this.order = new Order()
  this.total = new Total()
};

  create_final_amount(){
    this.total.amount_owed = this.total.total_cost()
  }

  create_receipt(){
    this.total.order_tax()
    this.total.total_cost()
    this.create_final_amount()
  }

  print_order(){
    this.order.customer_order.forEach(function(entry) {
      console.log(entry);
    })
  }

  print_receipt(){
    this.print_order() 
    let receipt = 
    ('Tax     $'+ this.total.tax +'\n'+
    'Total     $'+ this.total.amount_owed)
    return receipt
  }
}
  