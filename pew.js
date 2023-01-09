//Get Computer choice
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    
    let computerChoice = "";
    switch (random) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "scissor";
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
    //else if (conditions pc wins)
    //else (conditions tie)
    //return round winner
}

const userPick = "rock";
userPick = userPick.toLowerCase();
const computerPick = getComputerChoice();
playRound(userPick, computerPick);
//Loop for 5 rounds
//State winner