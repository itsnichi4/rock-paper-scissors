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

    let continueGame = true

    while (continueGame) {
        let playerSelection = prompt("Choose your weapon").toUpperCase()
        const computerSelection = getComputerChoice(weapon);


        playRound(playerSelection, computerSelection)
        console.log("Your choice is" + "\n" + playerSelection)
        console.log("Computer's choice is" + "\n" + computerSelection)
        console.log("Winner:" + "\n" + roundWinner)
        if (playerScore === 5 || computerScore === 5)
            continueGame = false;
            
        console.log("Player score is: " + playerScore);
        console.log("Computer score is: " + computerScore)
        
    }

}

function gameWinner() {

    if (playerScore === 5) {
    console.log("Player has won the game!")
    }
    if (computerScore === 5) {
        console.log("Computer has won the game!");
    }


}



game()



gameWinner()