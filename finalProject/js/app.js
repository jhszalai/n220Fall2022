//variables
x=90;
y=40;
let villain=[];
let black = "#000000";
let white = "#FFF";
let neon = "#39FF14";
let neon2 = "#39FF14";
let ship = {
    x:109,
    y:520,
}

function drawShip(color){
    fill(color);
    rect(ship.x, ship.y, 100, 50);
}

function drawShield(color){
    fill(color);
    rect(75, 400, 110, 40); 
}


/**function draw(){
    drawShield(white);
}
**/

function setup() {
    
    createCanvas(600,600)
    noStroke();
    background(black);
    createVillain(90,40);
    
}

/*
Villains without Array

    //villains row 1
    fill(white);
    rect(50, 50, 20, 20);

    fill(white);
    rect(90, 50, 20, 20);

    fill(white);
    rect(130, 50, 20, 20);

    fill(white);
    rect(170, 50, 20, 20);

    fill(white);
    rect(210, 50, 20, 20);

    fill(white);
    rect(250, 50, 20, 20);

    fill(white);
    rect(290, 50, 20, 20);

    fill(white);
    rect(330, 50, 20, 20);

    fill(white);
    rect(370, 50, 20, 20);

    //villains row 2

    fill(white);
    rect(50, 170, 20, 20);

    fill(white);
    rect(90, 170, 20, 20);

    fill(white);
    rect(130, 170, 20, 20);

    fill(white);
    rect(170, 170, 20, 20);

    fill(white);
    rect(210, 170, 20, 20);

    fill(white);
    rect(250, 170, 20, 20);

    fill(white);
    rect(290, 170, 20, 20);

    fill(white);
    rect(330, 170, 20, 20);

    fill(white);
    rect(370, 170, 20, 20);

    //villains row 4

    fill(white);
    rect(50, 130, 20, 20);

    fill(white);
    rect(90, 130, 20, 20);

    fill(white);
    rect(130, 130, 20, 20);

    fill(white);
    rect(170, 130, 20, 20);

    fill(white);
    rect(210, 130, 20, 20);

    fill(white);
    rect(250, 130, 20, 20);

    fill(white);
    rect(290, 130, 20, 20);

    fill(white);
    rect(330, 130, 20, 20);

    fill(white);
    rect(370, 130, 20, 20);

    //villains row 4

    fill(white);
    rect(50, 90, 20, 20);

    fill(white);
    rect(90, 90, 20, 20);

    fill(white);
    rect(130, 90, 20, 20);

    fill(white);
    rect(170, 90, 20, 20);

    fill(white);
    rect(210, 90, 20, 20);

    fill(white);
    rect(250, 90, 20, 20);

    fill(white);
    rect(290, 90, 20, 20);

    fill(white);
    rect(330, 90, 20, 20);

    fill(white);
    rect(370, 90, 20, 20);

//vilains row 5

*/

/* 

//Array Attempt 1
function villainSetup() {
let x = 50;

        for (let i = 0; i < 50; i++) {
            x = x + 40;
        }
    }

    function draw() {
        for (let i = 0; i < 50; i++) {
            fill(white);
            rect(50, 50, 20, 20);
        }
    }
*/

//Array Attempt 2
function createVillain(x,y) {
    function drawVillain() {
        rect(x,y,20,20);
    }
    for(i=1; i<41; i++) {
        villain[i]= new drawVillain(x,y)
        if(i%10==0){
            y+=40;
            x=40;
        }
        x+=50;

    }
}

console.log(villain);

createVillain(90,40)
console.log(villain);

//Pew Attempt

function draw() {
    moveY=20
    function ProjMove() {
        moveY-=2;
    }

    function shootProj() {
       let Projectile = rect(ship.x+50,moveY,10,200);
        setInterval(ProjMove, 1000)
        }
    }
    drawShip(neon);

    drawShield(white);
    
    //movement
    if(keyIsDown(LEFT_ARROW)){
        drawShip(black)
        ship.x-=5;
        drawShip(neon)
    }
    if(keyIsDown(RIGHT_ARROW)){
        drawShip(black)
        ship.x+=5;
        drawShip(neon);
    }
    if(keyIsDown(ENTER)) {
        setTimeout(Destroy, 3000);
        fill(neon2)
       
        shootProj()
        
    }

    function Destroy() {
        let neon2 = "#000000";
    }
   
    
    /**if(keyIsDown(ENTER)) {
        fill(neon)
        rect(ship.x+50,20,10,200);
        shootProj(100)
    }/** */
    /**if(keyIsUp(ENTER)) {
        fill(black);
    }**/
    


