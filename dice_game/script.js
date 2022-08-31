function dicegame(){
    var randomNumber1=Math.floor(Math.random()*6)+1;
    var image1=document.querySelectorAll("img")[0];
    var randomDice="images/dice"+randomNumber1+".png";
    image1.setAttribute("src",randomDice);
    var randomNumber2=Math.floor(Math.random()*6)+1;
    var randomDice2="images/dice"+randomNumber2+".png"
    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomDice2);
    if(randomNumber1>randomNumber2){
    document.getElementById("game").innerHTML="🙌 Holla!! Player 1 Wins"
    }
    else if(randomNumber1<randomNumber2){
        document.getElementById("game").innerHTML="Holla!! Player 2 Wins 🙌"
    }
    else{
        document.getElementById("game").innerHTML="😶‍🌫️ Match Draws! 😶‍🌫️"
    }
}
