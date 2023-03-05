function getComputerChoice(){
    weapons = ["rock", "paper", "scissors"]
    const random_choice = weapons[Math.floor(Math.random() * weapons.length)];
    return random_choice;
}

let pairs = {
    // "winner": "loser"
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
};


let player_choice = prompt("Rock, paper, or scissors?").toLowerCase();
let computer_choice = getComputerChoice();
if (player_choice === computer_choice){
    console.log(`Tie! ${player_choice} ties ${computer_choice}`);
}
else if (pairs[player_choice] === computer_choice){
    // player wins
    console.log(`You win! ${player_choice} beats ${computer_choice}`);
}
else{
    // cpu wins
    console.log(`You lose! ${computer_choice} beats ${player_choice}`);
}