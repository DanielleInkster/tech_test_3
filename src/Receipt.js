class Receipt{
constructor() {
  this.total = 0;
  this.tax = 0
  this.customer_order = []
};

item_total(num,item){
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
  return num * menu[item]
}

  price(num,item){
  this.total +=this.item_total(num,item)
  }

  item_order(num, item){
    this.customer_order.push(num + ' x ' + item + '     ' + this.item_total(num,item) )
  }

  order_tax(){ 
    let tax = (this.total * 0.0864)
    this.tax = (Math.round(tax * 100) / 100)
    }

  total_cost(){
  let final = this.total + this.tax
  return Math.round(final * 100) / 100
  }
}
