function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    
    let value = [Math.floor (Math.random() * choice.length)];
    return choice[value];

}
console.log(getComputerChoice());