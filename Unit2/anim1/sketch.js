let x=0;

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(0);
  fill(0, 100, 200);
  textSize (72);
  text("Trey", x,  height/2);
  x=x+5;
  if (x > width) {
    x=-100;
    }

}
