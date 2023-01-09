//Get Computer choice
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    
    let computerChoice = "";
    switch (random) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "scissors";
            break;
        case 2:
            computerChoice = "paper";
            break;
    }

    return computerChoice;
}

//User choice vs. Computer choice
function playRound(userPick, computerPick) {
    //if (conditions when user wins)
    if ((userPick === "rock" && computerPick === "scissors")||(userPick === "scissors" && computerPick === "paper")||(userPick === "paper" && computerPick === "rock")) {
        console.log("I win!");
    }
    else if ((computerPick === "rock" && userPick === "scissors")||(computerPick === "scissors" && userPick === "paper")||(computerPick === "paper" && userPick === "rock")) {
        console.log("I lost!");
    }
    else {
        console.log("Tie!");
    }
    //return round winner
}

let userPick = "rock";
userPick = userPick.toLowerCase();
const computerPick = getComputerChoice();
console.log(computerPick);
playRound(userPick, computerPick);
//Loop for 5 rounds
//State winner