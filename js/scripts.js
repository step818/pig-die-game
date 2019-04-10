
  var player1Turn = true;
  var turnPoints = 0;
  var player1;
  var player2;


  function Player(name) {
    this.name = name,
    this.score = 0
  }

  //Function to roll the die
  var currentScore = 0 ;
  function roll() {
    currentRoll = Math.floor((Math.random() * 6) + 1);
    if (currentRoll != 1) {
      currentScore += currentRoll;
      $(".currentRound").text(currentScore);
    }
    else {
      rolledOne();
    }
  }

  function rolledOne() {
    currentScore = 0;
    player1Turn = !player1Turn;
    $(".currentRound").text("You rolled a " + currentRoll + ", next player please!");
  }

  function switchPlayer(points) {

    if (player1Turn) {
      player1.score += points
      displayPoints(player1);
      if (player1.score >= 100){
        winner(player1);
      }
    }
    else if (!player1Turn) {
      player2.score += points
      displayPoints(player2);
      if (player2.score >= 100) {
        winner(player2);
      }
    }
    currentScore = 0;
    player1Turn = !player1Turn;
    if(player1Turn) {
      alert("Player 1's Turn!")
    }
      else {
        alert("Player 2's Turn, sucka!")
      }
  }

  function displayPoints(player) {
    if(player1Turn){
    $("#totalScore1").text(" " + player.score);
    } else { $("#totalScore2").text(" " + player.score);
      }
  }


function createPlayer1()  {
  player1 = new Player($("input#nameOne").val());
  if (!$("input#nameOne").val()) {
     alert("Hey! What's your name?");
  } else {
    $(".player1").show();
    $(".name1").hide();
    $("#player1").text(" " + player1.name);
  }
};
function createPlayer2()  {
  player2 = new Player($("input#nameTwo").val());
  if (!$("input#nameTwo").val()) {
      alert("Hey! What's your name?");
  } else {
    $(".player2").show();
    $(".name2").hide();
    $("#player2").text(" " + player2.name);
  }
};

$(document).ready(function() {
// createPlayers
  $("#buttonOne").click(function(event) {
    event.preventDefault();
    createPlayer1();
  });
  $("#buttonTwo").click(function(event) {
    event.preventDefault();
    createPlayer2();
  });

  $("#roll").click(function() {
    roll();
    $("#displayRoll").text("You rolled a " + currentRoll);
  });

  $("#bankRoll").click(function(){
    switchPlayer(currentScore);
  });

});
