let computerOptions = ["rock", "paper", "scissors"];

let computerOutput = function computerChoice() {
    return computerOptions[Math.floor(Math.random() * 3)];
}

console.log(computerOutput())