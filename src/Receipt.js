class Receipt{
constructor() {
}

  get_date(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    return dateTime
  }

  receipt_header(){
    let header =
    (this.get_date()+ '\n'+
    'The Coffee Connection'+ '\n \n'+
    "123 Lakeside Way"+ '\n'+
    "Phone: 1 (650) 360-0708"+ '\n'+
    ". \n"
    )
    return header
  }
  
  print_order(){
   return order.customer_order.toString().replace(",","")
  }

  which_receipt(){
    if(order.discount.discount_applied === true){
      let discount_receipt =
      (this.receipt_header() +
       this.print_order() +'\n'+
      'Disc     5% from $'+ order.discount.original_amount+'\n'+
      'Tax:     $'+ order.total.tax +'\n'+
      'Total:     $'+ order.total.amount_owed+'\n'+
      'Cash:     $'+ order.payment.received+'\n'+
      'Change:     $' + order.payment.change)
      return discount_receipt
     } 
     else if(order.discount.discount_applied === false){
      let receipt = 
      (this.receipt_header()+
       this.print_order() +'\n'+
      'Tax:     $'+ order.total.tax +'\n'+
      'Total:     $'+ order.total.amount_owed+'\n'+
      'Cash:     $'+ order.payment.received+'\n'+
      'Change:     $' + order.payment.change)
      return receipt
    }
  }

  print_receipt(){
    return this.which_receipt()
  }
}

  