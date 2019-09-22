$(document).on("click", ".eatButton", function () {
  var burgerId = $(this).data("id");
  var devoured = $(this).data("devoured");
  console.log(devoured)

  var newDevoured = {
      devoured: devoured
  };

  $.ajax("/api/burgers/" + burgerId, {
      method: "PUT",
      data: newDevoured
  }).then(function () {
      location.reload();
  })
})

//Search button
$(document).on("click", "#order-button", function(event) {
  event.preventDefault();
  var newBurgerName = $("#burger_name").val().trim();

  if (newBurgerName) {
      var newBurger = {
          burger_name: newBurgerName
      }

      $.post("/api/burgers", newBurger, function() {
          location.reload();
      })
  } else {
      $("#error").text("Not A Burger!");
  }
})