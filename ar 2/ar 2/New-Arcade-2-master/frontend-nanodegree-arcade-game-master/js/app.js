// Sets an initial player score of 0.
var score = 0;
document.getElementById('playerScore').innerHTML = score;

let winDiv = ('.Wins');
winDiv.innerHTML = 'You score 8';

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
    this.sprite = 'images/enemy-bug.png';

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks



winGame = function (){
        this.win +=1 ;
        winDiv.innerHTML = `You Won ( ${this.win} ) ` ;
        alert('YOU WIN');
        this.reset();
 };

Enemy.prototype.update = function(dt) {
	this.x += this.speed * dt;

	if(this.x > 710) {
		this.x = -50;
	    this.speed = 200 + Math.floor(Math.random() * 350);
 }

	if (player.x < this.x + 80 &&
	   player.x + 80 > this.x &&
	   player.y < this.y + 60 &&
	   player.y + 60 > this.y) {
       player.collisionReset();

         score = 0;
		document.getElementById('playerScore').innerHTML = score;
        player.reset();
    };


    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y) {
	this.x = x;
	this.y = y;
	this.Player = 'images/char-princess-girl.png'
}
// Now write your own player class

Player.prototype.update = function (dt) {

    // If the player reaches the water

        if (player.y < 20) {

	score++;
	document.getElementById('playerScore').innerHTML = score;
	this.reset();

  };

};
 Player.prototype.reset = function(){
     this.x = 305;
     this.y = 405;

 };
Player.prototype.collisionReset = function (){
    this.reset();

};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.Player), this.x, this.y);
};
// This class requires an update(), render() and

// a handleInput() method.

Player.prototype.handleInput = function (keyPress) {

	if (keyPress == 'left' && this.x > 0) {
		this.x -= 102;
	}
	if (keyPress == 'right' && this.x < 605) {
		this.x += 102;
	}
	if (keyPress == 'up' && this.y > 0) {
		this.y -= 83;
	}
	if (keyPress == 'down' && this.y < 405) {
		this.y += 83;
	}
	if (this.y < 0) {
		setTimeout(function () {
			player.x = 305;
			player.y = 405;
		}, 600);
	}
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var enemyLocation = [63, 147, 230];

enemyLocation.forEach(function (locationY) {
	enemy = new Enemy(0, locationY, 200);
	allEnemies.push(enemy);
});



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
var player = new Player(305, 405);
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
