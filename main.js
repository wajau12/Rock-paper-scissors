function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    
    let value = [Math.floor (Math.random() * choice.length)];

    return choice[value];

}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {

    let choice = ["rock", "paper", "scissors"];
    playerSelection = playerSelection.toLowerCase();

    if(!choice.includes(playerSelection, computerSelection)){
        return (" " +  playerSelection + " is invalid Selection, please choose either rock, paper or scissors.");
    }
    else if(playerSelection === computerSelection){
        return "Tie score";

    } else if (playerSelection ==="rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock"){
        return "You win! "  + playerSelection + " " + "beats " + computerSelection + ".";

    } else {
        return "You lose! "  + computerSelection + " " + "beats " + playerSelection + ".";
    }
    
    
}
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));