/* computer random choices */

const choices = ["Rock", "Paper", "Scissors"]
let playerScore = 0;
let computerScore = 0;

function computer(){
    return choices[Math.floor(Math.random() * 3)];
}


/* player make choices */
function player(){
    return String(prompt("Rock/Paper/Scissors"));
}



/* decide one round who wim who lose, ourput string like"Rock beat scissors" */
function round(){
    let computerChoices = computer();
    let playerChoices = player();
    let roundInfo = "";
    switch(playerChoices.toLowerCase())
    {
        /*when you choices rock start */
        case "rock":
            switch(computerChoices.toLowerCase())
            {
                case "rock":
                    roundInfo = `${playerChoices} to Rock, keep going on`;
                    break;
                case "paper":
                    computerScore = computerScore + 1;
                    roundInfo = `${playerChoices} to Paper, you lose`;
                    break;
                case "scissors":
                    playerScore = playerScore + 1;
                    roundInfo = `${playerChoices} to scissors, you win`;
                    break;
            }
            break;
        /*when you choices rock end */

        /*when you choices paper start */
        case "paper":
            switch(computerChoices.toLowerCase())
            {
                case "rock":
                    playerScore = playerScore + 1;
                    roundInfo = `${playerChoices} to Rock, you win`;
                    break;
                case "paper":
                    roundInfo = `${playerChoices} to Paper, keep going on`;
                    break;
                case "scissors":
                    computerScore = computerScore + 1;
                    roundInfo = `${playerChoices} to scissors, you lose`;
                    break;
            }
            break;
        /*when you choices paper end */

        /*when you choices scissors start*/
        case "scissors":
            switch(computerChoices.toLowerCase())
            {
                case "rock":
                    computerScore = computerScore + 1;
                    roundInfo = `${playerChoices} to Rock, you lose`;
                    break;
                case "paper":
                    playerScore = playerScore + 1;
                    roundInfo = `${playerChoices} to Paper, you win`;
                    break;
                case "scissors":
                    roundInfo = `${playerChoices} to scissors, keep going on`;
                    break;
            }
            break;
        /*when you choices scissors end*/
        
    }
    return roundInfo;
    
    
}


