class Order{
  constructor(total= new Total, menu = new Menu) {
    this.total = total
    this.menu = menu
    this.customerOrder = []
  }

  itemOrder(num, item){
    this.customerOrder.push(' '+item + '     '+ num + ' x '   + this.total.itemPrice(item) + '\n')
  }
  
  createOrder(num,item){ 
    this.total.itemPrice(item)
    this.total.itemTotal(num,item)
    this.total.price(num,item)
    this.itemOrder(num,item)
  }

}