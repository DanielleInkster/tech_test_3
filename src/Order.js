class Order{
  constructor() {
    this.payment = new Payment
    this.receipt = new Receipt()
    this.total = new Total()
    this.customer_order = []
  }

  item_order(num, item){
    this.customer_order.push(item + '     '+ num + ' x '   + this.total.item_price(item) )
  }
  
  create_order(num,item){
    this.total.item_price(item)
    this.total.item_total(num,item)
    this.total.price(num,item)
    this.item_order(num,item)
  }
}