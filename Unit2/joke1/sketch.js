let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize (30);
  textAlign(CENTER);
}

function draw() {

  switch (state) {
    case 0:
    background('grey');
    text("What is the best\n thing about Switzerland?", width/2, height/2)
      break;


    case 1:
    background('red');
    text("I don't know \nbut the flag is a big plus.", width/2, height/2)
      break;

  }
}

function mouseReleased(){
  state++;
  if (state > 1) {
    state = 0 ;
  }
}
