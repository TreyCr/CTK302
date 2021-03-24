var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var ship;
var star;
var stars = [];
var bgIG;
var bgLose;
var bgWin;
var menuS;

function setup() {

  createCanvas(800, 1100);


  stars[0] = loadImage("assets/Star1.png");
  stars[1] = loadImage("assets/Star2.png");
  star = loadImage("assets/Star1.png");
  ship = loadImage("assets/Ship1.png");
  bgStart = loadImage("assets/background(start).png");
  bgIG = loadImage("assets/background(ingame).png");
  bgLose = loadImage("assets/background(lose).png");
  bgWin = loadImage("assets/background(win).png");
  menuS = loadSound ("assets/menu.mp3");


  for (var i = 0; i < 5; i++) {
    cars.push(new Car());

  }


  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  switch (myState) {
    case 0:
    menuS.play();
    image(bgStart, width/2, height/2);
      break;

    case 1:
      game();
      timer++;
      if (timer > 800) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2:

      image(bgLose, width/2, height/2);

      break;

    case 3:
      image(bgWin, width/2, height/2);

      break;


  }


}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      resetTheGame();
      myState = 0;
      break;

    case 3:
      resetTheGame();
      myState = 0;
      break;

  }
}

function resetTheGame() {
  car = [];
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  timer = 0;
}


function Car() {
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.starNum = floor(random(stars.length-1)) ;
  this.timer = 0;
  this.maxTimer = random(10, 60);


  this.display = function() {
    image(stars[this.starNum], this.pos.x, this.pos.y, 50, 50);

    this.timer = this.timer + 1;
    if (this.timer > this.maxTimer) {
      this.starNum = this.starNum + 1;
      if (this.starNum > stars.length - 1) this.starNum = 0;
      this.timer = 0 ;
    }

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function game() {
  image(bgIG, width/2, height/2);


  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);

    }
  }

  if (cars.length == 0) {
    timer = 0
    myState = 3;
  }

  image(ship, frogPos.x, frogPos.y, 100, 100);
  checkForKeys();

}
