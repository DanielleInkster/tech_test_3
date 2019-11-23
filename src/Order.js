class Order{
  constructor() {
    this.customer_order = []
  };

  item_order(num, item){
    this.customer_order.push(item + '     '+ num + ' x '   + receipt.total.item_price(item) )
  }
  create_order(num,item){
    receipt.total.item_price(item)
    receipt.total.item_total(num,item)
    receipt.total.price(num,item)
    this.item_order(num,item)
  }
}