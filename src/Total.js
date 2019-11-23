class Total{
constructor() {
  this.tax = 0
  this.pre_tax_total = 0
  this.amount_owed= 0
  }

  item_price(item){
    let menu = new Menu
      return menu.options[item]
    }

  item_total(num,item){
    return num * this.item_price(item)
  }

  price(num,item){
    this.pre_tax_total +=this.item_total(num,item)
  }

  order_tax(){ 
    let tax = (this.pre_tax_total * 0.0864)
    this.tax = (Math.round(tax * 100) / 100)
  }


  total_cost(){
    let final = this.pre_tax_total + this.tax
    return Math.round(final * 100) / 100
  }

}