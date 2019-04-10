
$(document).ready(function() {

  $("#buttonOne").click(function(event) {
    event.preventDefault();
    var oneName = $("input#nameOne").val();
      if (oneName === "") {alert("Hey! What's your name?");

      } else {
          $(".player1").show();
          $(".name1").hide();
          $("#player1").text(" " + oneName);
        }
  });

  $("#buttonTwo").click(function(event) {
    event.preventDefault();
    var twoName = $("input#nameTwo").val();
      if (twoName === "") {alert("Hey! What's your name?");

      } else {
          $(".player2").show();
          $(".name2").hide();
          $("#player2").text(" " + twoName);
        }
  });









});
