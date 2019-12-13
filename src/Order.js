class Order{
  constructor(totalClass = Total) {
    this.total = new totalClass()
    this.menu = new Menu()
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