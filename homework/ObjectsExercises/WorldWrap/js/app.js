//Jena Szalai
//N220 Fall 2022
//9-22-22



let round = {
    roundColor: "#FF3D40",
    roundY: 200,
    roundDiam: 50
}


function setup() {
    createCanvas(800,600);
}

let Xpos = 50;



function draw() {
    fill(round.roundColor);
    circle(Xpos, round.roundY, round.roundDiam);
    Xpos = Xpos + 5;
    if (Xpos >= 800) {
        Xpos = 0;
    }
}