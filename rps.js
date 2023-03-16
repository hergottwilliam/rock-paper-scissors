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
// scores in HTML
const playerscore = document.querySelector('#playerscore');
const cpuscore = document.querySelector('#cpuscore');

const result = document.querySelector("#result");

// scores in js
let playerscore_js = 0;
let cpuscore_js = 0;

const buttons = document.querySelectorAll('.weapon');

buttons.forEach((button) => {
    
    button.addEventListener('click', () =>{
        if (playRound(button.id, getComputerChoice()) == 'p1'){
            playerscore_js += 1;
            playerscore.textContent = `You: ${playerscore_js}`;
            result.textContent = `You win, ${button.id} beats ${pairs[button.id]}`;
        }
        else if (playRound(button.id, getComputerChoice()) == 'p2'){
            cpuscore_js += 1;
            cpuscore.textContent = `CPU: ${cpuscore_js}`;
            result.textContent = `CPU wins, ${button.id} loses to CPU CHOICE`;
        }
        else {
            result.textContent = "Tie";
        }
    });
});
