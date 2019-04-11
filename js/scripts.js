
var player1Turn = true;
var turnPoints = 0;
var player1;
var player2;
var diceRoll = [ 'img/1.png',
  'img/2.png',
  'img/3.png',
  'img/4.png',
  'img/5.png',
  'img/6.png'
];

function Player(name) {
  this.name = name,
  this.score = 0
}

//Function to roll the die
var currentScore = 0 ;
function roll() {
  currentRoll = Math.floor((Math.random() * 6) + 1);
  $("#diceImage").empty();
  $("#diceImage").attr('src', diceRoll[currentRoll-1]);
  if (currentRoll != 1) {
    currentScore += currentRoll;
    $(".currentRound").text(currentScore);
  }
  else {
    rolledOne();
  }
}

function winner(player) {
  alert(player.name + "Wins the Game!");
  player1.score = 0;
  player2.score = 0;
}

function rolledOne() {
  currentScore = 0;
  player1Turn = !player1Turn;
  $(".currentRound").text("You rolled a " + currentRoll + ", next player please!");
}

function switchPlayer(points) {
    if (player1Turn) {
    player1.score += points
    totalPoints(player1);
    if (player1.score >= 100){
      winner(player1);
    }
  }
  else if (!player1Turn) {
    player2.score += points
    totalPoints(player2);
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

function displayTurn() {
  if (player1Turn) {
    $("#whosTurn").text(player1.name + "'s" +  " current score is:");
  }
    else if (!player1Turn) {
      $("#whosTurn").text(player2.name + "'s" + " current score is:");
  }
}

function totalPoints(player) {
  if(player1Turn){
  $("#totalScore1").text(" " + player.score);
  } else { $("#totalScore2").text(" " + player.score);
    }
}

function checkPlayer() {
  if (player1 && player2) {
    $("#diceStuff").show();

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
    checkPlayer();
    displayTurn();
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
    checkPlayer();
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
    displayTurn();
  });

  $("#bankRoll").click(function(){
    switchPlayer(currentScore);
  });

});
