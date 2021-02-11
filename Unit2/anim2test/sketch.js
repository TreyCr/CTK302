let x=0;

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(97, 104, 120);
  push();
  translate(x, 0);
  avatar();
  pop();
  x+=10;
  if (x>width) {
    x=-1000
  }
}

function bg() {
  if (mouseIsPressed) {
    background(97, 104, 120);
  } else {
    background(131, 173, 195);
  }
}

function avatar() {

  if (mouseIsPressed) {

    noStroke();

    //roof/backshell
    fill(69, 76, 92);
    rect(725, 325, 300, 300);

    //roof/helmet
    fill(69, 76, 92);
    rect(750, 125, 250, 350);

    //body/house
    fill(195, 195, 195);
    rect(750, 350, 250, 250);

    //head/garage
    fill(195);
    rect(775, 150, 200, 250);

    //door/mouth
    fill(255);
    rect(825, 275, 100, 50);

    //doorknob
    fill(217, 215, 74);
    circle(875, 315, 10);

    //window/eyeR
    fill(196, 255, 254);
    rect(900, 160, 50, 75);

    //window/eyeL
    fill(196, 255, 254);
    rect(800, 160, 50, 75);

    //garagedoor/belly
    fill(255);
    rect(830, 400, 90, 150);

    //armsL
    fill(180, 180, 180);
    rect(790, 385, 25, 75)

    //armsR
    fill(180, 180, 180);
    rect(935, 385, 25, 75)

    //legsL
    fill(180, 180, 180);
    rect(935, 600, 25, 75)

    //legsR
    fill(180, 180, 180);
    rect(790, 600, 25, 75)

    } else {

    noStroke();

    //houseBASE
    fill(195, 195, 195);
    rect(750, 350, 250, 250);

    //door
    fill(255);
    rect(850, 475, 50, 100);

    //windowR
    fill(196, 255, 254);
    rect(925, 370, 50, 75);

    //windowL
    fill(196, 255, 254);
    rect(775, 370, 50, 75);

    //doorknob
    fill(217, 215, 74);
    circle(890, 525, 10);

    //roof
    fill(69, 76, 92);
    triangle(728, 350, 1021, 350, 872, 236);

    //garageBASE
    fill(195, 195, 195);
    rect(550, 445, 250, 200);

    //garageDOOR
    fill(255);
    rect(580, 480, 150, 90);

    //garageROOF
    fill(69, 76, 92);
    quad(570, 400, 727, 400, 764, 455, 533, 455);
  }
}
