//Code FREEZE: 3/2 @ 6:45 pm CST
var myState = 0;
var timer = 0;

let st1;
let st2;
let st3;
let st4;
let st5;


function setup() {
  createCanvas(600, 850);
  st1 = loadImage ("assets/st1.png");
  st2 = loadImage ("assets/st2.png");
  st3 = loadImage ("assets/st3.png");
  st4 = loadImage ("assets/st4.png");
  st5 = loadImage ("assets/st5.png");

  imageMode (CENTER);

  textSize(30);
  textAlign(CENTER);
  fill('white');
}

function draw() {

  switch (myState) {
    case 0:
    background('white');
    image(st1, width/2, height/2, 600, 850);
    text("Initial Picture\nWait to Edit or Click to Edit", width/2, 100);

  timer++;
  if(timer>200){
    myState=1;
    timer=0;
  }
      break;

    case 1:
    image(st2, width/2, height/2, 600, 850);
    text("Add the vines", width/2, 100);

    timer++;
    if(timer>200){
      myState=2;
      timer=0;
    }
      break;

      case 2:
      image(st3, width/2, height/2, 600, 850);
      text("Color Correct", width/2, 100);

      timer++;
      if(timer>200){
        myState=3;
        timer=0;
      }
        break;

        case 3:
        image(st4, width/2, height/2, 600, 850);
        text("Enter the Upside Down", width/2, 100);

        timer++;
        if(timer>200){
          myState=4;
          timer=0;
        }
          break;

          case 4:
          image(st5, width/2, height/2, 600, 850);
          text("Make me match the environment\nALL DONE", width/2, 100);

          timer++;
          if(timer>200){
            myState=0;
            timer=0;
          }
            break;

  }
}


function mouseReleased(){
  myState++ ;
  if (myState > 5) {
    myState = 0;
  }
}
