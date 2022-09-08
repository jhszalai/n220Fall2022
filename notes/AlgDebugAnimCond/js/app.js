//let spices = 0;
//function draw() {
//    spices = spices + 1000;
//    console.log(spices);
//}

let xPos = 0;
let yPos = 40;

let xSpeed = 1;
let ySpeed = 1;

function setup() {
    createCanvas(400, 300)
}

//function draw() {
//    xPos++;
//    circle(xPos, 200, 30)
//}

//function draw() {
//    xPos = xPos + 1;
//    circle(xPos, 200, 30)
//}

//function draw() {
//    xPos = xPos + 20;
//    circle(xPos, 200, 30)
//}

//function draw() {
//    xPos = xPos + .1;
//    circle(xPos, 200, 30)
//}

function draw() {
    background(95, 232, 223)
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    //ySpeed = ySpeed + .08;

    //var myBool = xPos < 100;
    //console.log(xPos, myBool);

    //fill("#2CD46A")
    //stroke("#58F592")

    //if (xPos > 100) {
    //    fill("#AD73F5");
    //}
    //else
    //{
    //    fill("#2CD46A");
    //}

    //if (keyIsDown(LEFT_ARROW)) {
    //    fill("#AD73F5");
    //}
    //else
    //{
    //    fill("#2CD46A");
    //}

    if (keyIsDown(LEFT_ARROW)) {
        xSpeed = -1;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        xSpeed = 1;
    }

    if (keyIsDown(UP_ARROW)) {
        ySpeed = -1;
    }

    if (keyIsDown(DOWN_ARROW)) {
        ySpeed = 1;
    }
    

    circle(xPos, yPos, 30);
}





