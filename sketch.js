// Declare Balls
let ball1;
let ball2;
let ball3;

// Declare Ball Array
let ballArray = [];

function setup() {
  createCanvas(500, 500);

  // Create New Ball Objects
  ball1 = new Ball(150, 250, 255, 0, 0);
  ball2 = new Ball(250, 250, 0, 255, 0);
  ball3 = new Ball(350, 250, 0, 0, 255);

  // Add Objects to Array
  ballArray.push(ball1);
  ballArray.push(ball2);
  ballArray.push(ball3);
}

function draw() {
  background(0);

  // fill(ball1.redValue, ball1.greenValue, ball1.blueValue);
  // ellipse(ball1.xPos, ball1.yPos, 100, 100);

  // fill(ball2.redValue, ball2.greenValue, ball2.blueValue);
  // ellipse(ball2.xPos, ball2.yPos, 100, 100);

  // fill(ball3.redValue, ball3.greenValue, ball3.blueValue);
  // ellipse(ball3.xPos, ball3.yPos, 100, 100);

  for (let i = 0; i < ballArray.length; i++) {
    fill(
      ballArray[i].redValue,
      ballArray[i].greenValue,
      ballArray[i].blueValue
    );
    ellipse(ballArray[i].xPos, ballArray[i].yPos, 100, 100);
  }
}

// Create a Ball Class
class Ball {
  constructor(x, y, r, g, b) {
    this.xPos = x;
    this.yPos = y;
    this.redValue = r;
    this.greenValue = g;
    this.blueValue = b;
  }
}
