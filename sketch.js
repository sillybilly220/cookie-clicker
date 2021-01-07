let score = 0;
let cookieSize = 250;
let addable = [1, 2, 3, 2, 1, 1, 1, 3, 2, 1];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#000');
  noStroke();
  fill('#84563C');
  ellipseMode(CENTER);
  ellipse(windowWidth / 2, windowHeight / 2, cookieSize);
  fill(255);
  textSize(32);
  text(score, 10, 30);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2);
  if (d < 120) {
    let added = random(addable);
    score += added;
    console.log(score);
  }
}
