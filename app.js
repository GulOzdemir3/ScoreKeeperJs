const player1 = {
    score: 0,
    button: document.querySelector("#playerOneBtn"),
    display: document.querySelector("#pOneDisplay")
}

const player2 = {
    score: 0,
    button: document.querySelector("#playerTwoBtn"),
    display: document.querySelector("#pTwoDisplay")
}

const selectNumber = document.querySelector("#chooseWinNum");
const resetBtn = document.querySelector("#reset")
let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponents) {
    if(!isGameOver) {
        player.score +=1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-info");
            opponents.display.classList.add("has-text-danger-dark");
            player.disabled = true;
            opponents.disabled = true;
        }
    player.display.textContent = player.score;
    }
}

player1.button.addEventListener("click", function () {
    updateScores(player1, player2)      //player1 will be player, player2 will be oppoonent
})
player2.button.addEventListener("click", function () {
    updateScores(player2, player1)      //player2 will be player, player1 will be oppoonent
})

// this is the callback. Therefore, i put the reset() into this function
chooseWinNum.addEventListener("change", function() {
     winningScore = parseInt(this.value);       // number options are strings, we use parseInt to convert them into integers
     reset();
})      



resetBtn.addEventListener("click", reset)

function reset() {                              // for loop so that when there are more than one player, you don't have to rewrite all the elements
    isGameOver = false;
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove("has-text-info", "has-text-danger-dark");
        p.button.disabled = false;      //enable buttons once the game is reset, for user to be able to click
}
}


