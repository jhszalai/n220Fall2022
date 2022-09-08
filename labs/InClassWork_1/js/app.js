var size = 0;

function setup() {
    createCanvas(800,600)
}



function draw() {
    ellipse(mouseX, mouseY, size);   
    if (mouseIsPressed) {
        //background(0);
        console.log(size);
        size = size + 1;
    }
    else {

    }
    if (size>=50) {
        size = 50;
    }
}