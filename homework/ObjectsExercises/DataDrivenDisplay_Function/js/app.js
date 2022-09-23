//Jena Szalai
//N220 Fall 2022
//9-22-2022



let television = {
    boxX: 300,
    boxY: 300,
    boxWidth : 250,
    boxHeight: 200,
    boxColor: "#D4F1FA",
    screenX: 275,
    screenY: 280,
    screenWidth: 300,
    screenHeight: 180,
    screenColor: "#4D5759",
    buttonX: 320,
    buttonY: 530,
    buttonDiam: 20,
    buttonColor: "#000",
    selectionX: 345,
    selectionY: 517,
    selectionWidth: 187,
    selectionHeight: 25
    //line1StartX: television.boxWidth + 20,
    //line1StartY: television.boxHeight + 20
}


function setup() {
    createCanvas(800, 800);
}

function draw() {
    fill(television.screenColor);
    rect(television.screenX, television.screenY, television.screenWidth, television.screenY);
    fill(television.boxColor);
    rect(television.boxX, television.boxY, television.boxWidth, television.boxHeight);
    fill(television.buttonColor);
    circle(television.buttonX, television.buttonY, television.buttonDiam);
    rect(television.selectionX, television.selectionY, television.selectionWidth, television.selectionHeight);
}