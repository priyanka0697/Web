let rock_div=document.getElementById("rock");
let paper_div=document.getElementById("paper");
let scissors_div=document.getElementById("scissors");

function play(userChoice) {
    let oppChoice = Math.random();
    let opponentChoice='';
    if (oppChoice<0.34)
        opponentChoice='rock';
    else if (oppChoice<0.67)
        opponentChoice='paper';
    else
        opponentChoice='scissors';

    if (userChoice === opponentChoice)
        alert( "Its a tie! Try again");
    else if (userChoice == "rock")
        if (opponentChoice == "scissors")
            alert( "Congrats You Won !!! Your opponent had scissors");
        else
            alert("Sorry You Lost !!! Your opponent had Papers");
    else if (userChoice == "paper")
        if (opponentChoice == "rock")
            alert( "Congrats You Won !!! Your opponent had rock");
        else
            alert("Sorry You Lost !!! Your opponent had scissors") ;
    else if (userChoice == "scissors")
        if (opponentChoice == "paper")
            alert("Congrats You Won !!! Your opponent had paper");
        else
            alert("Sorry You Lost !!! Your opponent had rock");
}

function main(){
    rock_div.addEventListener('click', function(){
       play("rock");
    })


    paper_div.addEventListener('click', function(){
        play("paper");
    })


    scissors_div.addEventListener('click', function(){
       play("scissors");
    })
}

main();