function getComputerChoice() {
  var options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

let playerScore = 0;
let computerScore = 0;
let winner = "";
let roundsPlayed = 0;
 

function game(id) {


  roundsPlayed++;
  // everytime find what the button id is and assign that to the player selection
  if (id === "rock") {
    playerSelection = "rock";
  } else if (id === "paper") {
    playerSelection = "paper";
  } else {
    playerSelection = "scissors";
  }
  // redo the computer selection
  const computerSelection = getComputerChoice();

  // for (let i = 5; i > 0; i--) {

  console.log(`the computer selected ${computerSelection}`)
  console.log(`the player selected ${playerSelection}`)
  

  console.log(playRound(playerSelection, computerSelection));

  console.log("Player Win Totals " + playerScore);
  playerscore.textContent = `You: ${playerScore}`
  console.log("Computer Win Totals " + computerScore);
  computerscore.textContent = `Computer: ${computerScore}`
  rounds.textContent = `Round: ${roundsPlayed}`
  

  function playRound(playerSelection, computerSelection) {

    if (playerScore == 5 || computerScore == 5 ) {
      if (playerScore == 5 && playerScore > computerScore) {
        update.textContent = "Winner! You beat the Computer!"
      } else if (computerScore == 5 && computerScore > playerScore) {
        update.textContent = "Loser! You lost to the Computer"
      } else if (computerScore == 5 && playerScore == 5) {
        update.textContent = "You tied with the Computer. Try Again!"
      }

      alert(`Restart the Game!`) ? "" : location.reload();
    
    } else if (playerSelection === computerSelection) {
        update.textContent = `It's a Tie`;
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        update.textContent = `The Computer Wins! Vim beats VSCode`;
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        update.textContent = `The Computer Wins! Emacs beats Vim`;
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        update.textContent = `The Computer Wins! VSCode beats Emacs`;
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        update.textContent = `Nice! You Win! VSCode beats Emacs`;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        update.textContent = `Nice! You Win! Vim beats VSCode`;
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        update.textContent = `Nice! You Win! Emacs beats Vim`;
      }
  }

  

  console.log("The result is:" + winner);
  console.log(roundsPlayed)


  }




















// function game(id) {
//   function getComputerChoice() {
//     var options = ["rock", "paper", "scissors"];
//     return options[Math.floor(Math.random() * options.length)];
//   }
//   const computerSelection = getComputerChoice();
//   // console.log(computerSelection)
  

//   let playerScore = 0;
//   let computerScore = 0;
//   let winner = "";

  
//   if (id === "rock") {
//     playerSelection = "rock";
//   } else if (id === "paper") {
//     playerSelection = "paper";
//   } else {
//     playerSelection = "scissors";
//   }

//   console.log("the computer chose: " + computerSelection)
//   console.log("the player chose: " + playerSelection)
  
//   // console.log(playerSelection)
//   console.log(playRound(playerSelection, computerSelection));


//   function playRound(playerSelection, computerSelection) {
//   if (playerSelection == computerSelection) {
//     update.textContent = `It's a Tie, You both picked ${playerSelection}`;
//   } else if (playerSelection == "rock" && computerSelection == "paper") {
//     computerScore++;
//     return "The Computer Wins! Paper beats Rock";
//   } else if (playerSelection == "paper" && computerSelection == "scissors") {
//     computerScore++;
//     return "The Computer Wins! Scissors beats Paper";
//   } else if (playerSelection == "scissors" && computerSelection == "rock") {
//     computerScore++;
//     return "The Computer Wins! Rock beats Scissors";
//   } else if (playerSelection == "rock" && computerSelection == "scissors") {
//     playerScore++;
//     return "Nice! You Win! Rock beats Scissors";
//   } else if (playerSelection == "paper" && computerSelection == "rock") {
//     playerScore++;
//     return "Nice! You Win! Paper beats Rock";
//   } else if (playerSelection == "scissors" && computerSelection == "paper") {
//     playerScore++;
//     return "Nice! You Win! Scissors beats Paper";
//   }
//   }  


//   playerscore.textContent = "Player Win Totals " + playerScore;
//   computerscore.textContent = "Computer Win Totals " + computerScore;


 
   
// }



