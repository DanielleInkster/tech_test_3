$(document).ready(function() {
  let order = new Order();
  
    $('#menu').html(order.menu.showMenu());

    $('#enteredOrder').on('submit', function(event){
      event.preventDefault()
      event.stopImmediatePropagation()
      let item = $("#Item").val()
      let num = $("#Amount").val()
      order.createOrder(num,item)
      addOrder(num,item)
      formClear()
    })


    $('#complete').on('click', function(){
      if (confirm("Confirm order is complete.")) { 
        sumOrder()
        formClear()
        }
    })

    $('#cancel').on('click', function(){
      if (confirm("Are you sure you want to cancel your order? This action cannot be undone.")) { 
        $("#order td").parent().remove();
        formClear()
        order = new Order();
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
            "<td style='text-align:center'>"+`${num}`+"</td>" +
            "<td style='text-align:center'>"+`${order.total.itemPrice(item)}`+"</td>" +
          "</tr>"
      );
    }

    function sumOrder() {
      $("#order tbody").parent().append(
          "<tr>" +
            "<td style='text-align:center'>"+"</td>" +
            "<td style='text-align:center'>"+"</td>" +
            "<td style='text-align:center'>"+"</td>" +
            "<td style='text-align:center'>"+`${order.total.totalCost()}`+"</td>" +
          "</tr>"
      );
    }

})