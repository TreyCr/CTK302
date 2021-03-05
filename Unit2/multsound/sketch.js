let state=0;
let song1, song2, song3;

function preload() {
  song1 = loadSound ("assets/song1.mp3");
  song2 = loadSound ("assets/song2.mp3");
  song3 = loadSound ("assets/song3.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}

function setup() {
  createCanvas(500, 500);
  textSize(22);
  textAlign(CENTER);
}

function draw() {

  background(168, 178, 181);
  switch (state) {

    case 0:
      song1.play();
      state=1;
      break;

    case 1:
      text("Enjoy song 1 \n Skrillex Orchestral Suite by Varien", width/2, height/2)
      break;

    case 2:
      song2.play();
      state=3;
      break;

    case 3:
      text("Enjoy song 2 \n Canon in D by Pachelbel", width/2, height/2)
      break;

    case 4:
      song3.play();
      state=5;
      break;

    case 5:
      text("Enjoy song 3 \n Screen by Twenty One Pilots (Piano Cover)", width/2, height/2)
      break;
  }

}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();

  state++;
  if (state>5) state=0;
}

function touchStarted() {
  getAudioContext().resume();
}
