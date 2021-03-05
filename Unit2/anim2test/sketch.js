let x=0;

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  push();
  translate(x, 0);
  avatar();
  pop();
  x+=10;
  if (x>width) {
    x=-1000
  }
}

function avatar() {


  if (mouseIsPressed) {

    noStroke();
    background(97, 104, 120);

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
    background(131, 173, 195);

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

function text();

  if(mouseIsPressed){
    let s = "When the town begins to move you hear these screams turn to creaks of wood almost as if the owner is being crushed by the house. This makes me wonder if the humans are becoming more than just homeowners rather they are becoming the homes.";
    text(s, 50, 25, 300, 300);
  } else {
    let s = "In the small ghost town of Strathmore, not everything is as it seems. Something isn't wrong about this place but something definitely isn't right. During the night, its almost as if the town moves around. There are still a few humans here but it seemed about the same time as the town began to wonder a majority of the people wandered with it and haven't been seen since...";
    text(s, 175, 25, 400, 300);
    }
  }

function ground() {

  //sun
  fill(247, 217, 180);
  circle(475, 75, 100);

  //treetrunk
  fill(107, 79, 0);
  rect(219, 500, 50, 100);

  //treeleavesBOT
  fill(3, 100, 9);
  triangle(168, 509, 318, 509, 244, 417);

  //treeleavesMID
  fill(3, 100, 9);
  triangle(168, 450, 318, 450, 244, 360);

  //treeleavesTOP
  fill(3, 100, 9);
  triangle(168, 400, 318, 400, 244, 300);

  //grass
  fill(73, 130, 93);
  rect(0, 570, 1280, 150);

  //sidewalk
  fill(150, 150, 150);
  rect(850, 570, 50, 500);

  //sidewalkROAD
  fill(150, 150, 150);
  rect(0, 630, 1280, 150);
}
