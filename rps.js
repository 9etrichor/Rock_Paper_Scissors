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


/* decide how many rounds, final winner, count number of win */
function manyRounds(){
    let numberOfRounds = Number(prompt("How many rounds you want ?"))
    for(i = 1; i <= numberOfRounds;i = i + 1)
    {
        console.log(`round ${i}`);
        console.log(round());
        console.log(`your score is ${playerScore}, computer score is ${computerScore}`);
    }
    if(computerScore === playerScore)
    {
        console.log("you all win");
    }
    else
    {
        if(playerScore > computerScore)
        {
            console.log("you win")
        }
        else
        {
            console.log("you lose")
        }
    }
}
manyRounds();