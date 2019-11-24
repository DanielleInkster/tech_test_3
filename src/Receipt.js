class Receipt{
constructor() {
}

  create_receipt(){
    order.total.order_tax()
    order.total.total_cost()
    return "Your order total is: $"+ order.total.amount_owed
  }

  print_order(){
    order.customer_order.forEach(function(entry) {
      console.log(entry);
    })
  }

  which_receipt(){
    if(order.discount.discount_applied === true){
      let discount_receipt =
      ('Disc     5% from $'+ order.discount.original_amount+'\n'+
      'Tax:     $'+ order.total.tax +'\n'+
      'Total:     $'+ order.total.amount_owed+'\n'+
      'Cash:     $'+ order.payment.received+'\n'+
      'Change:     $' + order.payment.change)
      return discount_receipt
     } 
     else if(order.discount.discount_applied === false){
      let receipt = 
      ('Tax:     $'+ order.total.tax +'\n'+
      'Total:     $'+ order.total.amount_owed+'\n'+
      'Cash:     $'+ order.payment.received+'\n'+
      'Change:     $' + order.payment.change)
      return receipt
    }
  }

  print_receipt(){
    this.print_order() 
    return this.which_receipt()
  }
}

  