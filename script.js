var wins = 0;
var loses = 0;
var ties = 0;


var options = ["R", "P", "S"];

var playGame = function (){

var userChoice = window.prompt("Input R, P, or S, for Rock, Paper, or Scissors");

if (!userChoice) {
    return;
}

var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

window.alert("the computer chose " + computerChoice);

if(userChoice === computerChoice) {
    ties++
}
// calculate user win scenarios

else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerchoice === "P") 
) {
     wins++
    window.alert("you won");
}
    
else if( 
    (computerChoice === "R" && userChoice === "S") ||
    (computerChoice === "P" && userChoice === "R") ||
    (computerChoice === "S" && userChoice === "P")
)
    {

    loses++
    window.alert("you lost");
}
    }


playGame();