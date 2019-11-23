class Receipt{
constructor() {
  this.total = 0;
  this.tax = 0
  this.amount_owed= 0
  this.order = new Order()
};

item_price(item){
  let menu = new Menu
    return menu.options[item]
  }

  item_total(num,item){
    return num * this.item_price(item)
  }

  price(num,item){
   this.total +=this.item_total(num,item)
  }

  order_tax(){ 
    let tax = (this.total * 0.0864)
    this.tax = (Math.round(tax * 100) / 100)
    return this.tax
  }

  total_cost(){
    let final = this.total + this.tax
    return Math.round(final * 100) / 100
  }

  create_final_amount(){
    this.amount_owed = this.total_cost()
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
    ('Tax     $'+ this.tax +'\n'+
    'Total     $'+ this.amount_owed)
    return receipt
  }
}


  