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

 function game(){
    let player_score = 0;
    let cpu_score = 0;

    for (let i = 0; i < 5; i++){
        let player_choice = prompt("Rock, paper, or scissors?").toLowerCase();
        let computer_choice = getComputerChoice();
        round_winner = playRound(player_choice, computer_choice);

        if (round_winner === "tie"){
            console.log(`Tie! ${player_choice} ties ${computer_choice}`);
        }
        else if (round_winner === "p1"){
            console.log(`You win! ${player_choice} beats ${computer_choice}`);
            player_score += 1;
        }
        else if (round_winner === "p2"){
            console.log(`You lose! ${computer_choice} beats ${player_choice}`);
            cpu_score += 1;
        }

    }

    console.log(`FINAL SCORE: Player:${player_score} CPU:${cpu_score}`);

 }

 game();