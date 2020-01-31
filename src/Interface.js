$(document).ready(function() {
  let order = new Order();
  
    $("#enterPayment").hide()
    $("#print").hide()
    $("#new").hide()
    $('#menu').html("<h2>Menu</h2>"+order.menu.showMenu());

    $('#enteredOrder').on('submit', function(event){
      events(event)
      let item = $("#Item").val()
      let num = $("#Amount").val()
        if(item===null){
        alert("Please enter a valid item.")
        events(event)
      } else if(num ==="" || num==="0"){
        alert("Please enter number of "+ `${item}`+"s you wish to order.")
        events(event)
      } else{
        order.createOrder(num,item)
        addOrder(num,item)
        formClear()
      }
    })

    $('#complete').on('click', function(){
      if ($('#order tbody tr').length === 1){
        alert("No order submitted.")
        events(event)
      } else if (confirm("Confirm order is complete.")) { 
        events(event)
        $("#enteredOrder").hide()
        $("#complete").hide()
        $("#enterPayment").show()
        order.total.createBill()
        sumOrder()
        formClear()
        }
    })

    $('#cancel').on('click', function(){
      if (confirm("Are you sure you want to cancel your order? This action cannot be undone.")) { 
        newOrder()
        }
    })

    $('#enterPayment').on('submit', function(event){
      let num = Number($("#Payment").val()).toFixed(2)
      let amount = order.total.amountOwed
      if(num<amount ||num===""){
        alert("Payment must equal or exceed order total.")
        events(event)
      } else {
      order.total.payment.payBill(num,amount)
      addPayment(num)
      addChange()
      events(event)
      $("#enterPayment").hide()
      $("#cancel").hide()
      $("#print").show()
      }
    })

    $('#print').on('click', function(){
      let receipt = new Receipt(order)
      $("#print").hide()
      $("#order").hide()
      $("#new").show()
      $("#receipt").show()
      $("#receipt").html(receipt.printReceipt())
    })

    $('#new').on('click', function(){
      if (confirm("Are you sure you want to start a new order? All current information will be lost.")){
      newOrder()
      }
    })

    function formClear() {
      $("#Item").val("");
      $("#Amount").val("");
    }

    function addOrder(num, item) {
      $("#order tbody").parent().append(
          "<tr>" +
            "<td style='text-align:center'>"+`${item}`+"</td>" +
            "<td style='text-align:center'>"+`${num}`+" x </td>" +
            "<td style='text-align:center'>"+`${order.total.itemPrice(item)}`+"</td>" +
    "</tr>"
      );
    }

    function sumOrder() {
      $("#order tbody").parent().append(
          "<tr>" +
            "<td style='text-align:center'></td>" +
            "<td style='text-align:center'></td>" +
            "<td style='text-align:center'></td>" +
            "<td style='text-align:center'>"+`${order.total.amountOwed.toFixed(2)}`+"</td>" +
          "</tr>"
      );
    }

    function newOrder() {
      $("#order td").parent().remove();
        events(event)
        formClear()
        order = new Order();
        $("#enteredOrder").show()
        $("#complete").show()
        $("#cancel").show()
        $("#enterPayment").hide()
        $("#receipt").hide()
        $("#new").hide()

    }

    function addPayment(num) {
      $("#order tbody").parent().append(
          "<tr>" +
            "<td style='text-align:center'>"+"</td>" +
            "<td style='text-align:center'>"+"</td>" +
            "<td style='text-align:center'> Amount Paid: </td>" +
            "<td style='text-align:center'>"+ num+"</td>" +
          "</tr>"
      );
    }

    function addChange() {
      $("#order tbody").parent().append(
          "<tr>" +
            "<td style='text-align:center'>"+"</td>" +
            "<td style='text-align:center'>"+"</td>" +
            "<td style='text-align:center'> Change: </td>" +
            "<td style='text-align:center'>"+`${order.total.payment.change}`+"</td>" +
          "</tr>"
      );
    }

    function events(event){
      event.preventDefault()
      event.stopImmediatePropagation()
    }

})