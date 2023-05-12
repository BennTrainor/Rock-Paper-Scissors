window.addEventListener('load', function(){

let rockBtn = document.getElementById('rock-btn');
    rockBtn.addEventListener('click', function() {
        let playerChoice = "rock";
        let computerChoice = computerPlay();
        playGame(playerChoice, computerChoice);
        
        if (playerChoice == "rock" && computerChoice == "scissors") {
            alert("You Win! You chose Rock and the computer chose Scissors") 
            playerScore();
        }

        else if (playerChoice == "rock" && computerChoice == "paper") {
            alert("You Lose! You chose Rock and the computer chose Paper")
            computerScore();
        }

        else if(playerChoice == computerChoice) {
            alert("This round is a draw!");
        }
});
    
let paperBtn = document.getElementById('paper-btn');
    paperBtn.addEventListener('click', function() {
        let playerChoice = "paper";
        let computerChoice = computerPlay();
        playGame(playerChoice, computerChoice);
        
        if  (playerChoice == "Paper" && computerChoice == "Rock") {
            alert("You Win! You chose Paper and the computer chose Rock")
            playerScore();
        }

        else if (playerChoice == "Paper" && computerChoice == "Scissors") {
            alert("You Lose! You chose Paper and the computer chose Scissors")
            computerScore();
        }

        else if(playerChoice == computerChoice) {
            alert("This round is a draw!");
        }
    });
    
let scissorsBtn = document.getElementById('scissors-btn');
    scissorsBtn.addEventListener('click', function() {
        let playerChoice = "scissors";
        let computerChoice = computerPlay();
        playGame(playerChoice, computerChoice);

        if (playerChoice == "Scissors" && computerChoice == "Paper") {
            alert("You Win! You chose Scissors and the computer chose Paper")
            playerScore();
        }

        else if (playerChoice == "scissors" && computerChoice == "rock") {
            alert("You Lose! You chose Scissors and the computer chose Rock")
            computerScore();
        }

        else if(playerChoice == computerChoice) {
            alert("This round is a draw!");
        }
        
    });

let options = ["rock", "paper", "scissors"];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playGame(playerChoice, computerChoice) {
    
		
    let result = playGame(playerChoice, computerChoice);

		if (result === "You Win! You chose Rock and the computer chose Scissors") {
			playerScore();
		} 

        else if (result === "You Win! You chose Scissors and the computer chose Paper") {
			playerScore();
		} 

        else if (result === "You Win! You chose Paper and the computer chose Rock") {
			playerScore();
		} 

        else if (result === "You Lose! You chose Rock and the computer chose Paper") {
			computerScore();
		}

        else if (result === "You Lose! You chose Paper and the computer chose Scissors") {
            computerScore();
        }

        else if (result === "You Lose! You chose Scissors and the computer chose Rock") {
            computerScore();
        }

        function playerScore() {

            let oldPlayerScore = parseInt(document.getElementById("p-scores").innerText);
            document.getElementById("p-scores").innerText = ++oldPlayerScore;
        
        }

        function computerScore() {

                let oldComputerScore = parseInt(document.getElementById("c-scores").innerText);
                document.getElementById("c-scores").innerText = ++oldComputerScore;
            
        }
    }
})