class Receipt{
constructor() {
  this.total = 0;
  this.tax = 0
  this.amount_owed= 0
  this.customer_order = []
};

item_price(item){
  let menu = {
    "Cafe Latte": 4.75,
    "Flat White": 4.75,
    "Cappucino": 3.85,
    "Single Espresso": 2.05,
    "Double Espresso": 3.75,
    "Americano": 3.75,
    "Cortado": 4.55,
    "Tea": 3.65,
    "Choc Mudcake": 6.40,
    "Choc Mousse": 8.20,
    "Affogato": 14.80,
    "Tiramisu": 11.40,
    "Blueberry Muffin": 4.05,
    "Chocolate Chip Muffin": 4.05,
    "Muffin Of The Day": 4.55
    }
    return menu[item]
  }

  item_total(num,item){
    return num * this.item_price(item)
  }

  price(num,item){
   this.total +=this.item_total(num,item)
  }

  item_order(num, item){
    this.customer_order.push(item + '     '+ num + ' x '   + this.item_price(item) )
  }

  create_order(num,item){
    this.item_price(item)
    this.item_total(num,item)
    this.price(num,item)
    this.item_order(num,item)
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
    this.customer_order.forEach(function(entry) {
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


  