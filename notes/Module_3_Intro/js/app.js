//function drawFace() {
//    circle(10, 10, 5);
//    circle(30, 10, 5);
//    circle(15, 30, 5);
//}

function drawFace(x,y) {
    line(x,y, x+10, y+10);
    circle(x + 10, y + 10, 5);
    circle(x + 30, y + 10, 5);
    circle(x + 15, y + 30, 5);
}

function setup() {
    createCanvas(800,800)
    fill(255,2555,0);
    //invoke-run-etc.. the function
    drawFace(400, 400);
    drawFace(10,10);
    drawFace(400,10);
    drawFace(mouseX, mouseY);
}

