d = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (x = 0; x < width; x++) {
    point(x, 150 * sin((x + d) * TWO_PI / 360) + height / 2)
  }
  d++;
}