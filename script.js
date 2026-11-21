console.log("Lets play ROCK,PAPER and SCISSOR")

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1);
    
    if (num === 1) {
        return "SCISSOR";
    } else if (num === 2) {
        return "ROCK"
    } else {
        return "PAPER"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose ROCK,PAPER or SCISSOR");
    return humanChoice;
}

function playGame () {
    let humanScore = 0,
    computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
        console.log("Computer Chose! : " + computerChoice);
        console.log("You Chose! : " + humanChoice);
        if (humanChoice === computerChoice) {
            return "Thats a Tie Try again";
        } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
            computerScore++;
            return "You Lose!, PAPER BEATS ROCK"
        } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
            humanScore++;
            return "You WIN!, PAPER BEATS ROCK"
        } else if (humanChoice === "ROCK" && computerChoice === "SCISSOR") {
            humanScore++;
            return "You WIN!, ROCK BEATS SCISSOR";
        } else if (humanChoice === "SCISSOR" && computerChoice === "ROCK") {
            computerScore++;
            return "You LOSE!, ROCK BEATS SCISSOR";
        } else if (humanChoice === "PAPER" && computerChoice === "SCISSOR") {
            computerScore++;
            return "You LOSE!, SCISSOR BEATS PAPER";
        } else if (humanChoice === "SCISSOR" && computerChoice === "PAPER") {
            humanScore++;
            return "You WIN!, SCISSOR BEATS PAPER";
        } else {
            return "INVALID INPUT!";
        }
    }
    

    console.log(playRound (getHumanChoice(), getComputerChoice()));
    console.log(playRound (getHumanChoice(), getComputerChoice()));
    console.log(playRound (getHumanChoice(), getComputerChoice()));
    console.log(playRound (getHumanChoice(), getComputerChoice()));
    console.log(playRound (getHumanChoice(), getComputerChoice()));

    console.log("Your Score : " + humanScore + "  " + "Computer Score : " + computerScore);

    if (humanScore > computerScore) {
        return "You Win! The Game";
    } else if (computerScore > humanScore) {
        return "You Lose!";
    } else {
        return "Tie!"
    }
}

console.log(playGame())