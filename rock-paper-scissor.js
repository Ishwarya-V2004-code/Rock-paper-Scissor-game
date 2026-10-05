

let score = (JSON.parse(localStorage.getItem("score")));


if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    updatecode();
}
function playGame(playerMove) {
    pickComputerMove();
    let result = "";


    if (playerMove === 'Scissor') {
        if (computerGuess === "Rock") {
            result = "tie";
        } else if (computerGuess === "Paper") {
            result = "You win";
        }
        else if (computerGuess === "Scissor") {
            result = "You loss";
        }
    } else if (playerMove === 'Paper') {
        if (computerGuess === "Rock") {
            result = "You loss";
        } else if (computerGuess === "Paper") {
            result = "tie";
        }
        else if (computerGuess === "Scissor") {
            result = "You loss";
        }

    } else if (playerMove === 'Rock') {
        if (computerGuess === "Rock") {
            result = "tie";
        } else if (computerGuess === "Paper") {
            result = "You loss";
        }
        else if (computerGuess === "Scissor") {
            result = "You win";
        }



    }
    if (result === 'You win') {
        score.wins += 1;//+=1
    } else if (result === 'You loss') {
        score.losses += 1;
    } else if (result === 'tie') {
        score.ties += 1;
    }
    //show the result here thats while create the localStorage here
    localStorage.setItem("score", JSON.stringify(score));
    document.querySelector(".js-result").innerHTML = result;//because it is result is variable
    document.querySelector(".js-moves").innerHTML = ` You <img class="move-img" src="images/${playerMove}-emoji.png" alt="" />
    <img class="move-img" src="images/${computerGuess.toLowerCase()}-emoji.png" alt="" /> computer`;
    updatecode();

    //alert(`You picked ${playerMove.toLowerCase()}. Computer picked ${computerGuess}.${result}
    //wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);

}
function updatecode() {
    document.querySelector(".js-score").innerHTML =
        `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}


let computerGuess = '';
function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerGuess = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerGuess = 'Paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerGuess = 'Scissor';
    }
    console.log(computerGuess)
}



