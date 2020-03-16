const canvas = document.getElementById("baseCanvas");
const ctx = canvas.getContext("2d");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var speedSnake = 100
var snake = new Snake();

var fruit = new Fruit();

window.onload = () => {
    var x = 0;
    var y = 0;

    snake.draw();
    fruit.pickLocation();

    setInterval(game, speedSnake);
    
    document.addEventListener("keydown", keyPush); //When keyboard is pushed
}

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snake.update();

    if(snake.eat(fruit)) {
        addPoint();
    }

    snake.draw();
    fruit.draw();

    //Game over
    if(snake.defeated()) {
        gameOver();
    }

}

function gameOver() {
    var newUrl = window.location.href.replace("game.html", "game-over.html");
    window.location.replace(newUrl);s
}

function keyPush(evt) {
    snake.changeDirection(evt.key);
}

function addPoint() {
    console.log("Fruit is eaten!");

    fruit.pickLocation();
}