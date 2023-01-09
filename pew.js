//Get Computer choice
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    
    let computerChoice = null;
    switch (random) {
        case 0:
            computerChoice = "rock hard!";
            break;
        case 1:
            computerChoice = "wet water!";
            break;
        case 2:
            computerChoice = "paper thin";
            break;
    }

    return computerChoice;
}

console.log(getComputerChoice());
//Get User choice
//User choice vs. Computer choice
//Loop for 5 rounds
//State winner