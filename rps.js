let weapons = ["rock", "paper", "scissors"];

let pairs = {
    // "winner": "loser"
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
};

function getComputerChoice(){
    const random_choice = weapons[Math.floor(Math.random() * weapons.length)];
    return random_choice;
}

function playRound(p1_choice, p2_choice){
    if (p1_choice === p2_choice){
        return "tie";
    }
    else if (pairs[p1_choice] === p2_choice){
        // p1 wins
        return "p1";
    }
    else{
        // cpu wins
        return "p2";
    }
}

const buttons = document.querySelectorAll('.weapon');

buttons.forEach((button) => {
    
    button.addEventListener('click', () =>{
        console.log(playRound(button.id, getComputerChoice()));
    });
});
