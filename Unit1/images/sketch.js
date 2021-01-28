let hxh;
let jonbellion;
let sloth;

function setup() {
  createCanvas(800, 800);
  hxh = loadImage ("assets/hxh.jpg");
  jonbellion = loadImage ("assets/jonbellion.jpg");
  sloth = loadImage ("assets/sloth.jpg");

  imageMode(CENTER);
}

function draw() {
  background('white');
  image(jonbellion, width/2, height/2, 400, 225);
  image(sloth, width/2, height/2 + 225, 400, 225);
  image(hxh, width/2, height/2 - 225, 400, 225);
}
