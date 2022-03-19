/* computer random choices */

const choices = ["Rock", "Paper", "Scissors"]


function computer(){
    return choices[Math.floor(Math.random() * 3)];
}


/* player make choices */
function player(){
    return String(prompt("Rock/Paper/Scissors"));
}
console.log(player());


/* decide one round who wim who lose, ourput string like"Rock beat scissors" */
function round(){

}

/* decide how many rounds, final winner, count number of win */
function manyRounds(){

}