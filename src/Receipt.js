class Receipt{
constructor(order = new Order) {
  this.order = order
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
   return this.order.customerOrder.toString().replace(",","")
  }

  whichReceipt(){
    if(this.order.total.discountApplied === true){
      let discountReceipt =
      (this.receiptHeader() +
       this.printOrder() +'\n'+
      'Disc     5% from $'+ this.order.total.discount.originalAmount+'\n'+
      'Tax:     $'+ this.order.total.tax +'\n'+
      'Total:     $'+ this.order.total.amountOwed+'\n'+
      'Cash:     $'+ this.order.total.payment.received+'\n'+
      'Change:     $' + this.order.total.payment.change)
      return discountReceipt
     } 
     else if(this.order.total.discountApplied === false){
      let receipt = 
      (this.receiptHeader()+
       this.printOrder() +'\n'+
      'Tax:     $'+ this.order.total.tax +'\n'+
      'Total:     $'+ this.order.total.amountOwed+'\n'+
      'Cash:     $'+ this.order.total.payment.received+'\n'+
      'Change:     $' + this.order.total.payment.change)
      return receipt
    }
  }

  printReceipt(){
    return this.whichReceipt()
  }
}

  