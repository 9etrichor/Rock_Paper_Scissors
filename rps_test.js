let playerChoice = "paper";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let outputStr = "";
const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnSci = document.getElementById('btnSci');
/*computer make choice start */
const choices = ["rock", "paper", "scissors"]
function computer(){
    return choices[Math.floor(Math.random() * 3)];
};
computerChoice = computer();
/*computer make choice end */

/*play a round start, decide one win, output string, count mark */
function singleRound()
{
    let outStr = "";
    switch(playerChoice.toLowerCase())
    {
        case "rock": /*player choice rock*/
            switch(computerChoice.toLowerCase())
            {
                case "rock":
                    outStr = "keep going";
                    break;
                case "paper":
                    outStr = "you lose";
                    computerScore++;
                    break;
                case "scissors":
                    outStr = "you win";
                    playerScore++;
                    break;
            };
            break;

        case "paper": /*player choice paper */
            switch(computerChoice.toLowerCase())
            {
                case "rock":
                    outStr = "you win";
                    playerScore++;
                    break;
                case "paper":
                    outStr = "keep going";
                    break;
                case "scissors":
                    outStr = "you lose";
                    computerScore++;
                    break;
            };
            break;

        case "scissors": /*player choice scissors */
            switch(computerChoice.toLowerCase())
            {
                case "rock":
                    outStr = "you lose";
                    computerScore++;
                    break;
                case "paper":
                    outStr = "you win";
                    playerScore++;
                    break;
                case "scissors":
                    outStr = "keep going";
                    break;
            };
            break;
    };
    return outStr;
};
/*play a round end */

btnRock.addEventListener('click', function(){
    playerChoice = "rock";
    computerChoice = computer();
    outputStr = singleRound();
    console.log(outputStr + playerScore);
});

btnPaper.addEventListener('click', function(){
    playerChoice = "paper";
    computerChoice = computer();
    outputStr = singleRound();
    console.log(outputStr + playerScore);
});

btnSci.addEventListener('click', function(){
    playerChoice = "scissors";
    computerChoice = computer();
    outputStr = singleRound();
    console.log(outputStr + playerScore);
});
console.log(playerScore);