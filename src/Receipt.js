class Receipt{
constructor() {
}

  getDate(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    return dateTime
  }

  receiptHeader(){
    let header =
    (this.getDate()+ '\n'+
    'The Coffee Connection'+ '\n \n'+
    "123 Lakeside Way"+ '\n'+
    "Phone: 1 (650) 360-0708"+ '\n'+
    ". \n"
    )
    return header
  }
  
  printOrder(){
   return order.customerOrder.toString().replace(",","")
  }

  whichReceipt(){
    if(order.total.discount.discountApplied === true){
      let discountReceipt =
      (this.receiptHeader() +
       this.printOrder() +'\n'+
      'Disc     5% from $'+ order.total.discount.originalAmount+'\n'+
      'Tax:     $'+ order.total.tax +'\n'+
      'Total:     $'+ order.total.amountOwed+'\n'+
      'Cash:     $'+ order.total.payment.received+'\n'+
      'Change:     $' + order.total.payment.change)
      return discountReceipt
     } 
     else if(order.total.discount.discountApplied === false){
      let receipt = 
      (this.receiptHeader()+
       this.printOrder() +'\n'+
      'Tax:     $'+ order.total.tax +'\n'+
      'Total:     $'+ order.total.amountOwed+'\n'+
      'Cash:     $'+ order.total.payment.received+'\n'+
      'Change:     $' + order.total.payment.change)
      return receipt
    }
  }

  printReceipt(){
    return this.whichReceipt()
  }
}

  