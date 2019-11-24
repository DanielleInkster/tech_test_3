class Receipt{
constructor() {
}

  create_receipt(){
    order.total.order_tax()
    order.total.total_cost()
    order.total.create_final_amount()
  }

  print_order(){
    order.customer_order.forEach(function(entry) {
      console.log(entry);
    })
  }

  print_receipt(){
    this.create_receipt()
    this.print_order() 
    let receipt = 
    ('Tax:     $'+ order.total.tax +'\n'+
    'Total:     $'+ order.total.amount_owed+'\n'+
    'Cash:     $'+ order.payment.received+'\n'+
    'Change:     $' + order.payment.change
    )
    return receipt
  }
}

  