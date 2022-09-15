function setup() {
    createCanvas(500, 500);
    
  }

function redRemover(baseColor) {
    baseColor.setRed(0);
    return baseColor;
}

function draw() {
    let noRed = redRemover(color(170, 200, 150));

    fill(noRed);
    circle(30, 30, 20);
}