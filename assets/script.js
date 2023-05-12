let options = ["rock", "paper", "scissors"];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

let playerChoice = this.id;
	
let computerChoice = computerPlay();

function playGame(playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "scissors") {
        return "You Win! You chose Rock and the computer chose Scissors";
    }

    else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return "You Win! You chose Scissors and the computer chose Paper";
    }

    else if (playerChoice == "Paper" && computerChoice == "Rock") {
        return "You Win! You chose Paper and the computer chose Rock";
    }

    else if (playerChoice == "rock" && computerChoice == "paper") {
        return "You Lose! You chose Rock and the computer chose Paper";
    }

    else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return "You Lose! You chose Paper and the computer chose Scissors";
    }

    else if (playerChoice == "scissors" && computerChoice == "rock") {
        return "You Lose! You chose Scissors and the computer chose Rock";
    }

    else if(playerChoice == computerChoice) {
        return "This round is a draw!";
    }

}
		
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