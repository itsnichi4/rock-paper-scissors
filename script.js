  let playerScore = 0
  let computerScore = 0
  let roundWinner = ""





  
    function getComputerChoice(weapon) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * weapon.length);
    
        // get random item
        const item = weapon[randomIndex];

        return item;
        
    }

    const weapon = ["ROCK", "PAPER", "SCISSORS"];

        

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "tie"
    }

    if (
    (playerSelection === 'ROCK' && computerSelection === "SCISSORS") ||
    (playerSelection === 'PAPER' && computerSelection === "ROCK") ||
    (playerSelection === 'SCISSORS' && computerSelection === "PAPER")
    ) {

    playerScore++
    roundWinner = "player"
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === "SCISSORS") ||
        (computerSelection === 'PAPER' && playerSelection === "ROCK") ||
        (computerSelection === 'SCISSORS' && playerSelection === "PAPER")
    ) {
        computerScore++
        roundWinner = "computer"

    }
}

function game() {


 
    for (let i = 0; i < 10; i++){
    let playerSelection = prompt("Choose your weapon").toUpperCase()
    const computerSelection = getComputerChoice(weapon);

        
playRound(playerSelection, computerSelection)
console.log("Your choice is" + "\n" + playerSelection)
console.log("Computer's choice is" + "\n" + computerSelection)
console.log("Winner:" + "\n" + roundWinner)
}
}
// game()


console.log(game())

console.log(playerScore);
console.log(computerScore)
