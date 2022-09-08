//Jena Szalai
//N220
//9/7/2022

function setup() {
    createCanvas(800,600);
}

let Xpos = 50;



function draw() {
    fill(255, 0, 0);
    circle(Xpos, 200, 50);
    Xpos = Xpos + 5;
    if (Xpos >= 800) {
        Xpos = 0;
    }
}
