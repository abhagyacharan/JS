function getComputerChoice() {
    choices = ["rock", "paper", "scissors"]
  
    return choices[Math.floor(Math.random()*choices.length)];
  }

  playerPoints = 0;
  compPoints = 0;
  
  function playRound(computerChoice, playerChoice) {

    playerChoice = prompt("rock,paper,scissors?","");
    computerChoice = getComputerChoice();

    if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
      console.log(`You Lose. ${computerChoice} beats ${playerChoice}`);
      return compPoints = compPoints + 1;
    }
    else if (computerChoice === playerChoice) {
      console.log(`Draw!`);
    }
    else {
      console.log(`You Win. ${playerChoice} beats ${computerChoice}`);
      playerPoints = playerPoints + 1;
    }
  }

  function playGame(){
    for(i=1;i<=5;i++){
        playRound();
    }
    if(playerPoints>compPoints){
        console.log("you win!");
    }
    else{
        console.log("try again!");
    }
  }
  playGame();