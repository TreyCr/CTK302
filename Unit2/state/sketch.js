let state = 0;
let f1;
let f2;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  f1 = loadFont("assets/glashou.ttf");
  f2 = loadFont("assets/TrashHand.TTF");
  textSize(48);
}

function draw() {
  switch (state) {

    case 0:
        background(100);
        textFont(f1);
        text("state 0", width/2, height/2);
        break;

    case 1:
        background('red');
        textFont(f2);
        text("state 1", width/2, height/2);
        break;

    case 2:
        background('blue');
        textFont(f1);
        text("state 2", width/2, height/2);
        break;

    case 3:
        background('yellow');
        textFont(f2);
        text("state 3", width/2, height/2);
        break;

    case 4:
        background('green');
        textFont(f1);
        text("state 4", width/2, height/2);
        break;

    case 5:
        background('purple');
        textFont(f2);
        text("state 5", width/2, height/2);
        break;
}
}

function mouseReleased() {
  state = state + 1;
  if (state > 5) {
    state = 0;
  }
}
