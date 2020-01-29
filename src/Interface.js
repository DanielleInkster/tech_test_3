$(document).ready(function() {
  let order = new Order();
  
    $("#enterPayment").hide()
    $("#print").hide()
    $('#menu').html("<h2>Menu</h2>"+order.menu.showMenu());

    $('#enteredOrder').on('submit', function(event){
      events(event)
      let item = $("#Item").val()
      let num = $("#Amount").val()
      order.createOrder(num,item)
      addOrder(num,item)
      formClear()
    })

    $('#complete').on('click', function(){
      if (confirm("Confirm order is complete.")) { 
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
        $("#order td").parent().remove();
        events(event)
        formClear()
        order = new Order();
        $("#enteredOrder").show()
        $("#complete").show()
        $("#enterPayment").hide()
        }
    })

    $('#enterPayment').on('submit', function(event){
      let num = $("#Payment").val()
      let amount = order.total.amountOwed
      if(num<amount){
        alert("Payment must equal or exceed order total.")
        listeners(event)
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
            "<td style='text-align:center'>"+`${order.total.amountOwed}`+"</td>" +
          "</tr>"
      );
    }

    function addPayment(num) {
      $("#order tbody").parent().append(
          "<tr>" +
            "<td style='text-align:center'>"+"</td>" +
            "<td style='text-align:center'>"+"</td>" +
            "<td style='text-align:center'> Amount Paid: </td>" +
            "<td style='text-align:center'>"+`${num}`+"</td>" +
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