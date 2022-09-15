function setup() {
    createCanvas(500, 500);
}

function drawBear(x,y) {
    circle(x - 28,y-40,40)
    circle(x + 28,y-40,40)
    circle(x,y, 100)
    circle(x + 25,y,20)
    circle(x - 25,y,20)
    circle(x,y+10,10)
}

function draw() {
    drawBear(mouseX, mouseY);
}



