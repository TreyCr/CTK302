let s ;

function preload() {
  s = loadSound("assets/lofi.mp3");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {

}

function mouseReleased() {
  if (s.isPlaying()) {
    s.pause() ;
  } else {
    s.loop() ;
  }
}

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
