let scores = JSON.parse(localStorage.getItem('score')) || 
{
Wins: 0,
Losses: 0,
Ties: 0
};

/*
if(!scores) {
    scores = {
        Wins: 0,
        Losses: 0,
        Ties: 0
    };
    localStorage.setItem('score', JSON.stringify(scores));
}*/
// JSON.stringify(scores);
// console.log(scores);
function playGame(playerMove) {
    
    const compMove = computerMove();
    let result = '';

    if(playerMove === "rock") {
        if(compMove === "rock") result = 'Tie.';
        else if(compMove === "paper") result = 'You Lose.';
        else result = 'You Win.';
    }
    else if(playerMove === "paper") {
        if(compMove === "rock") result = 'You Win.';
        else if(compMove === "paper") result = 'Tie.';
        else result = 'You Lose.';
    }
    else {
        if(compMove === "rock") result = 'You Lose.';
        else if(compMove === "paper") result = 'You Win.';
        else result = 'Tie.';
    }
    if(result === 'You Win.') scores.Wins++;
    else if(result === 'Tie.') scores.Ties++;
    else scores.Losses++;

    localStorage.setItem('score', JSON.stringify(scores));
    
    updateParaElem(result, playerMove, compMove);
    
    // alert(`You chose ${playerMove}. Computer chose ${compMove}. ${result}\n
            // Wins: ${scores.Wins}, Losses: ${scores.Losses}, Ties: ${scores.Ties}`);
}

function computerMove() {
    let randomNum = Math.random() * 10;
    randomNum = parseInt(randomNum);

    if(randomNum <= 3) {
        return "rock";
    }
    else if (randomNum > 3 && randomNum <= 6) {
        return "paper";
    } 
    else {
        return "scissors";
    }
    //console.log(randomNum);
}
function resetScores() {
    
    scores.Wins = 0;
    scores.Losses= 0;
    scores.Ties= 0;
    localStorage.removeItem('score');
    //alert(
        //  "Scores reseted !"
    //)
    updateScoreElem();
}

function updateScoreElem() {
    document.querySelector('.js-para-score')
        .innerHTML = `Wins: ${scores.Wins}, Losses:${scores.Losses}, Ties: ${scores.Ties}`
}

function updateParaElem(result, playerMove, compMove) {
    const paraElem = document.querySelector('.js-para-result')
    paraElem
        .innerHTML = `${result}`    
    
    const html = `You:<img class="output-img" src="images/${playerMove}-hand.png"> - Computer: 
    <img class="output-img" src="images/${compMove}-hand.png">`

    document.querySelector('.js-para-moves')
        .innerHTML = html;
    const para2Elem = document.querySelector('.js-para-score')
    para2Elem
        .innerHTML = `Wins: ${scores.Wins}, Losses:${scores.Losses}, Ties: ${scores.Ties}`
}

let isAutoPlayOn = false;
let intervalId

function autoPlay() {
    document.querySelector('.js-auto-play').innerText = "Stop"
    //console.log(isAutoPlayOn)
    if(!isAutoPlayOn) {
        intervalId = setInterval(function() {
            let playerMove = computerMove();
            //console.log(isAutoPlayOn)
            playGame(playerMove)
        }, 1000)

        isAutoPlayOn = true
    }
    
    else {
        clearInterval(intervalId);
        document.querySelector('.js-auto-play').innerText = "Auto Play";
        isAutoPlayOn = false;
    }
    //console.log(isAutoPlayOn)
}