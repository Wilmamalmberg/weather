let diceDiv = document.getElementById("dice");
diceDiv.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let diceImage = diceDiv.querySelector("img");
    diceImage.src = "./img/" + randomNumber + ".png";
});
