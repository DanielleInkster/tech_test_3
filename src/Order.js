class Order{
  constructor() {
    this.payment = new Payment()
    this.receipt = new Receipt()
    this.total = new Total()
    this.menu = new Menu()
    this.discount = new Discount()
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