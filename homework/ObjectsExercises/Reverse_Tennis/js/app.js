let racket = {
    racket1X: 50,
    racket1Y: 400,
    racketWidth: 30,
    racketHeight: 75,
    racketColor: "#000",
    racket2X: 750,
    racket2Y: 400,
}


function setup() {
    createCanvas(800, 600);
}

function drawRackets(x,y) {
    rect(racket.racket1X, racket.racket1Y, racket.racketWidth, racket.racketHeight);
    rect(racket.racket2X, racket.racket2Y, racket.racketWidth, racket.racketHeight);
}

function draw() {
   // fill(racket.racketColor);

    drawRackets();
    if (keyIsDown(UP_ARROW)) {
        racket.racket1Y = racket.racket1Y + 5;
        racket.racket2Y = racket.racket2Y - 5;
      } 
    if (keyIsDown(DOWN_ARROW)) {
        racket.racket1Y = racket.racket1Y - 5;
        racket.racket2Y = racket.racket2Y + 5;
    }
    


   

}