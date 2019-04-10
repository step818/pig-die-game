
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

  $("#roll").click(function() {
    var roll = Math.floor((Math.random() * 6) + 1);
    $("#displayRoll").text("You rolled a " + roll);
var totalScore1 = 0;

  if (roll === 1){
    alert("end of your turn");


  } else if (roll>1) {

      totalScore1 = totalScore1 + roll;
      $("#totalScore1").text(totalScore1);
    }
});

});
