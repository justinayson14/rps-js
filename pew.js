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

//Get User choice
// function getUserChoice() {
//     userChoice = userChoice.toLowerCase().trim();
//     return userChoice;
// }

//User choice vs. Computer choice
function playRound(userPick) {
    let roundResult = "";
    let computerPick = getComputerChoice();

    if (userPick === "rock" && computerPick === "scissors") {
        roundResult = "You win! Rock beats scissors!";
    }
    else if (userPick === "scissors" && computerPick === "paper") {
        roundResult = "You win! Scissors beats paper!";
    }
    else if (userPick === "paper" && computerPick === "rock") {
        roundResult = "You win! Paper beats rock!";
    }
    else if (computerPick === "rock" && userPick === "scissors") {
        roundResult = "You lose! Rock beats scissors!";
    }
    else if (computerPick === "paper" && userPick === "rock") {
        roundResult = "You lose! Paper beats rock!";
    }
    else if (computerPick === "scissors" && userPick === "paper") {
        roundResult = "You lose! Scissors beats paper!";
    }
    else if (computerPick === userPick) {
        roundResult = "A tie! You and the computer had the same choices!";
    }
    else {
        roundResult = "Error"
    }
    
    return alert(roundResult);
}

//5 rounds and states winner of game
// function game() {
//     let userPoints = 0;
//     let pcPoints = 0;
//     for (let i = 0; i < 5; i++) {
//         const pickUser = getUserChoice();
//         const pickComputer = getComputerChoice();
//         console.log(`${pickUser} vs. ${pickComputer}`);

//         let resultRound = playRound(pickUser, pickComputer);
//         console.log(resultRound);

//         resultRound = resultRound.substring(resultRound.indexOf(' ') + 1, resultRound.indexOf('!'));

//         (resultRound === "win") ? userPoints++ : (resultRound === "lose") ? pcPoints++ : 0;
//         console.log(`${userPoints} vs. ${pcPoints}`);
//     }

//     (userPoints > pcPoints) ? console.log("You won the game!") : (userPoints < pcPoints) ? console.log("You lost the game!") : console.log("Rematch!");
// }

// game();


const rock = document.getElementById('rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', e => {
    playRound('rock');
});
paper.addEventListener('click', e => {
    playRound('paper');
});
scissors.addEventListener('click', e => {
    playRound('scissors');
});