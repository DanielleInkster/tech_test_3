class Order{
  constructor() {
    this.customer_order = []
  };

  item_order(num, item){
    this.customer_order.push(item + '     '+ num + ' x '   + receipt.item_price(item) )
  }
  create_order(num,item){
    receipt.item_price(item)
    receipt.item_total(num,item)
    receipt.price(num,item)
    order.item_order(num,item)
  }
}