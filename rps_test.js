let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let outputStr = "";
/*get three button element */
const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnSci = document.getElementById('btnSci');
/*get three button element */

const playerImg = document.getElementById("playerimg");
const computerImg = document.getElementById("computerimg");

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

/* output correct image when computer make choice start */
function computerImage()
{
    switch(computerChoice)
    {
        case "rock":
            return "img_pack/rock.png";
            break;
        case "paper":
            return "img_pack/Paper.png";
            break;
        case "scissors":
            return "img_pack/scissors_new.png";
            break;
    }
}
/* output correct image when computer make choice end */


/*player click button to make choice start*/
/* player click and choice rock start */
btnRock.addEventListener('click', function(){
    playerImg.src = "img_pack/rock.png";
    playerChoice = "rock";
    computerChoice = computer();
    computerImg.src = computerImage();
    outputStr = singleRound();
    console.log(outputStr + playerScore);
});
/* player click and choice rock end */


/* player click and choice paper start */

btnPaper.addEventListener('click', function(){
    playerImg.src = "img_pack/Paper.png";
    playerChoice = "paper";
    computerChoice = computer();
    computerImg.src = computerImage();
    outputStr = singleRound();
    console.log(outputStr + playerScore);
});
/* player click and choice paper end */


/* player click and choice scissors start */
btnSci.addEventListener('click', function(){
    playerImg.src = "img_pack/scissors_new.png";
    playerChoice = "scissors";
    computerChoice = computer();
    computerImg.src = computerImage();
    outputStr = singleRound();
    console.log(outputStr + playerScore);
});
/* player click and choice scissors end */
/*player click button to make choice end*/

