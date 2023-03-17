let gameStatus = true;

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

function checkWinner(p1_score, p2_score){
    // p1 will be player, p2 will be CPU
    if (p1_score == 5){
        result.textContent = "GAME OVER, you win!";
        gameStatus = false;
    }
    else if (p2_score == 5){
        result.textContent = "GAME OVER, CPU wins!";
        gameStatus = false;
    }

}

// scores in HTML
const playerscore = document.querySelector('#playerscore');
const cpuscore = document.querySelector('#cpuscore');

const result = document.querySelector("#result");
result.textContent = "First to 5 points wins!"

// scores in js
let playerscore_js = 0;
let cpuscore_js = 0;

const buttons = document.querySelectorAll('.weapon');

// check for events (main loop)
buttons.forEach((button) => {
    
    button.addEventListener('click', () =>{
        let tmp_cpu = getComputerChoice();
        if (gameStatus == true){
            if (playRound(button.id, tmp_cpu) == 'p1'){
                playerscore_js += 1;
                playerscore.textContent = `You: ${playerscore_js}`;
                result.textContent = `You win, ${button.id} beats ${tmp_cpu}`;
                checkWinner(playerscore_js, cpuscore_js);
            }
            else if (playRound(button.id, tmp_cpu) == 'p2'){
                cpuscore_js += 1;
                cpuscore.textContent = `CPU: ${cpuscore_js}`;
                result.textContent = `CPU wins, ${button.id} loses to ${tmp_cpu}`;
                checkWinner(playerscore_js, cpuscore_js);
            }
            else {
                result.textContent = "Tie";
            }
        }
        
    });
});
