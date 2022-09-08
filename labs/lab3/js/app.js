//Jena Szalai
//9/7/2022

//Drawing Drawer

    //function drawTeddy here + (x,y)

    //function setup
    //create canvas here
    //invoke drawTeddy 1 here with unique coordinates; 
    //invoke drawTeddy 2 here with unique coordinates;
    //invoke drawTeddy 2 here with unique coordinates; 


//Red Remover

    //function removeRed (170, 200, 150) {
        //colorVariableArgumentName.setRed(0);
        //setRed(0)
    //}

    //let noRed = removeRed(color(170,200,150))

    //function setup
    //fill(noRed);
    //draw circle

    function removeRed () {
        color(170,200,150);
        colorVariableArgumentName.setRed(0);

    }

    let noRed = removeRed(color(170,200,150));

    function setup() {
        createCanvas(800, 800)
    }

    function draw() {

        fill("#000000");
        circle(200, 200, 30);

        fill(noRed);
        circle(100, 100, 30);

    }





