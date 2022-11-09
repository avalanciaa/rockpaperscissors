// Computer Options for opponent

let computerChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return computerChoices[Math.floor(Math.random() * 3)];
}

console.log(`This is my computerChoice: ${getComputerChoice()}`)

// Player Selecting options

let userPrompt = prompt("Do you choose Rock, Paper, or Scissors?");

function playerSelection() {
    return userPrompt.toLowerCase()
}

console.log(`This is my player choice: ${playerSelection()}`)
// play a round function

computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "rock") {

        console.log("you tied!")

    } else if (playerSelection == "rock" && computerSelection == "paper") {

        console.log("you lost!")

    } else if (playerSelection == "rock" && computerSelection == "scissors") {

        console.log("you won")
    } else {
        console.log("working")
    }


}

playRound(userPrompt, computerSelection)