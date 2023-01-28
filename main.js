function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    
    let value = [Math.floor (Math.random() * choice.length)];

    return choice[value];

}
//console.log(getComputerChoice());

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
  //const playerSelection = "rock";
  //const computerSelection = getComputerChoice();
  //console.log(playRound(playerSelection, computerSelection));

function game(){
    let wins = 0;
    let loss = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Select either Rock, Paper or Scissors", " ");
        
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        
        console.log(`Round ${i+1} : ${result}`);

        if (result.startsWith("You win! ")) {
            wins++;
            alert(result);
            
        }  else if (result.startsWith("You lose! ")){
            loss++;
            alert(result);
           
        } else {
            ties++;
            alert(result);
            
        }

    }

    console.log(`You won ${wins} rounds, lost ${loss} rounds, and tied ${ties} rounds.`);

    if (wins > loss){
        return "You are the winner!";
    }else if (loss > wins){
        return "Computer wins";
    }else {
        return "It's a tie! Play again";
    }


}
console.log(game());
   
   