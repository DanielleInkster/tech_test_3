class Receipt{
constructor() {
  this.order = new Order()
  this.total = new Total()
};

  price(num,item){
    this.total.pre_tax_total +=this.total.item_total(num,item)
  }

  order_tax(){ 
    let tax = (this.total.pre_tax_total * 0.0864)
    this.total.tax = (Math.round(tax * 100) / 100)
  }

  total_cost(){
    let final = this.total.pre_tax_total + this.total.tax
    return Math.round(final * 100) / 100
  }

  create_final_amount(){
    this.total.amount_owed = this.total_cost()
  }

  create_receipt(){
    this.order_tax()
    this.total_cost()
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
  