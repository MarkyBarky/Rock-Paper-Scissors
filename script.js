//computer play

function computerPlay(){
    let number =  Math.floor(Math.random() * 3);
    if (number === 0) {
        return computerSelection = "Rock";
    } else if (number === 1) {
        return computerSelection = "Paper";
    } else {
        return computerSelection = "Scissors";
    };
}

//function to play 1 round

function playRound(playerSelection, computerSelection) {
    if (yourWins.textContent < 5 && computerWins.textContent < 5){
        if (playerSelection === computerSelection) {
            results.textContent = "Computer plays the same. Round tied!";
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            results.textContent = "Computer plays Paper. You lost the round!";
            computerWins.textContent = +computerWins.textContent + 1;
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            results.textContent = "Computer plays Scissors. You won the round!";
            yourWins.textContent = +yourWins.textContent + 1;
        } else if (playerSelection === "Paper" && computerSelection === "scissors") {
            results.textContent = "Computer plays scissors. You lost the round!";
            computerWins.textContent = +computerWins.textContent + 1;
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            results.textContent = "Computer plays rock. You win the round!";
            yourWins.textContent = +yourWins.textContent + 1;
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            results.textContent = "Computer plays Rock! You lost the round!";
            computerWins.textContent = +computerWins.textContent + 1;
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            results.textContent = "Computer plays Paper. You won the round!";
            yourWins.textContent = +yourWins.textContent + 1;
        }
    }
    if (computerWins.textContent == 5) {
            gameResult.textContent = "You have lost the game!"
        } else if (yourWins.textContent == 5) {
            gameResult.textContent = "You have won the game!"
        } 


//event listeners for buttons

}
 const playButtons = document.querySelectorAll('.playButton');

  playButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          computerPlay();
          playRound(event.target.textContent, computerSelection);
          
      })
  })
  
  resetButton.addEventListener('click', () => {
      yourWins.textContent = 0;
      computerWins.textContent = 0;
      gameResult.textContent = ""; 
      results.textContent = "";
  })