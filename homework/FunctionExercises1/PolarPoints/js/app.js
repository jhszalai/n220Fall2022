function setup() {
    createCanvas(1000, 1000);
}

function polarPoint(r) {
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);
    return createVector(x,y);
}

function draw() {
    let res = polarPoint(100,100);
    translate(100,100);
    circle(res.x, res.y, 10);

}
