main();

function main(){
    let player1roll = roll();
    let player2roll = roll();
    let announcement = document.getElementsByTagName("h1");

    if(player1roll > player2roll){
        announcement[0].textContent = "🚩Player 1 Wins!";
    }
    else if(player2roll > player1roll){
        announcement[0].textContent = "Player 2 Wins!🚩";
    }
    else{
        announcement[0].textContent = "Draw!";
    }

    let img1 = document.getElementsByClassName("img1");
    img1[0].src = `images/dice${player1roll}.png`;

    let img2 = document.getElementsByClassName("img2");
    img2[0].src = `images/dice${player2roll}.png`;
}

function roll(){
    return Math.trunc(Math.random() * 6) + 1;
}