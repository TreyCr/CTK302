
let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(72) ;
  textAlign(CENTER) ;
}

function draw() {
  switch (state) {

    case 0:
        background(174, 198, 207);
        text("case 0", 250, 250);
        break;

    case 1:
        background(255, 105, 97);
        text("case 1", 250, 250);
        break;

    case 2:
        background(202, 231, 193);
        text("case 2", 250, 250);
        break;

  }

  fill('black');
  rect(width/2-50,height-100,100,50);
}

function mouseReleased(){

  if ((mouseX> width/2-50)&&(mouseX<width/2+50)&&(mouseY>height-100)&&(mouseY<height-50)) {
    state = state + 1;
    if (state > 2) {
      state = 0;
    }
  }
}
