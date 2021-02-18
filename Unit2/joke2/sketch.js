let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textSize(30);
  textAlign(CENTER);
}

function draw() {

  switch (state) {
    case 0:
    background('black');
    fill('white');
    text("Why do we tell actors\n to break a leg?", width/2, height/2);
      break;


    case 1:
    background('blue');
    text("Because every play\n has a cast.", width/2, height/2);
      break;

  }
}



state++ ;
  if (state > 1) {
    state = 0;
  }

timer++ ;
if (timer > 3 * 60){
  timer = 0;
  }
