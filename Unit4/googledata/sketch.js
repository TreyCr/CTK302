
var bubbles = [];
var mvsd;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1g-SKN1HnJ-bnSc6tBbqQdGwi4_RzoAxz8w3AHJRjcFE'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(1200, 776);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  MvsD = loadImage("assets/mvd.jpg");

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Animal, data[i].Comic, data[i].Production)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  image(MvsD, 0, 0, 1200, 776);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

}


// my Bubble class
class Bubble {

  constructor(myAnimal, myComic, myProduction) {
    this.Animal = myAnimal;
    this.Comic = myComic;
    this.Production = myProduction;
    this.pos = createVector(random(width), random(height));

  }


  display() {

    if (this.Comic == "Marvel") {
    rect(this.pos.x, this.pos.y-20, 80, 80);
  } else {
    ellipse(this.pos.x, this.pos.y-20, 80, 80);
  }

    // ellipse(this.pos.x, this.pos.y-20, 80, 80);
    text(this.Animal, this.pos.x, this.pos.y);
    text(this.Comic, this.pos.x, this.pos.y-15);
    text(this.Production, this.pos.x, this.pos.y-30);
  }


}
