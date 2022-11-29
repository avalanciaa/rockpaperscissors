// computer selection
function getComputerChoice() {
    var options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

// Runs game
function game() {

    let playerScore = 0;
    let computerScore = 0;
    let winner = "";
    
    for (let i = 0; i < 5; i++) {
    
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
        
        console.log(playRound(playerSelection, computerSelection));
        // console.log(`the computer selected ${computerSelection}`)
        // console.log(`the player selected ${playerSelection}`)
        
        console.log("Player Win Totals " + playerScore);
        console.log("Computer Win Totals " + computerScore);

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
              return `It's a Tie, You both picked ${playerSelection}`;
            } else if (playerSelection === "rock" && computerSelection === "paper") {
              computerScore++
              return "The Computer Wins! Paper beats Rock";
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
              computerScore++
              return "The Computer Wins! Scissors beats Paper";
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
              computerScore++
              return "The Computer Wins! Rock beats Scissors";
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
              playerScore++
              return "Nice! You Win! Rock beats Scissors";
            } else if (playerSelection === "paper" && computerSelection === "rock") {
              playerScore++
              return "Nice! You Win! Paper beats Rock";
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
              playerScore++
              return "Nice! You Win! Scissors beats Paper";
            }
        }

    }

        if (playerScore > computerScore) {
            winner = "Winner! You beat the Computer!";
          } else if (playerScore === computerScore) {
            winner = "You tied with the Computer. Try Again!"
          } else {
            winner = "Loser! You lost to the Computer"
          }
    
        console.log("The result is:" + winner);
    }

   

    


game();

