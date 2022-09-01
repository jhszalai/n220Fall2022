function setup() {
    var pink = "#D96CC7";
    var sky = "#46E4FA";
    var white = "#ffff";
    var black = "#000000";
    var shirt = "#3EA1DE";
    
    createCanvas(800,800)
    noStroke();

    background(sky);

    fill(white);
    circle(135, 100, 70);

    fill(white);
    circle(365, 100, 70);
    
    //skinlegleft
    fill(249,215,186);
    rect(109, 600, 40, 300);

    //skinlegright
    fill(249,215,186);
    rect(351, 600, 40, 300);
    
    fill(48,110,205);
    rect(100, 600, 50, 100);

    fill(48,110,205);
    rect(350, 600, 50, 100);
    
    fill(48,110,205);
    rect(100, 550, 300, 60);

    //armskinright
    fill(249,215,186);
    circle(400, 400, 300);

    //armgapright
    fill(sky);
    circle(400, 400, 250);

    //armskinright
    fill(249,215,186);
    circle(100, 400, 300);

    //armgapright
    fill(sky);
    circle(100, 400, 250);

    fill(shirt);
    rect(60, 250, 45, 35);

    fill(shirt);
    rect(397, 250, 45, 35);

    fill(shirt);
    rect(100, 250, 300, 300);
    
    fill(white);
    rect(100, 100, 300, 150);

    fill(249,215,186);
    ellipse(245, 175, 200, 120);

    fill(black);
    circle(190, 160, 10);

    fill(black);
    circle(300, 160, 10);

    fill(249,215,186);
    stroke(black);
    arc(245, 190, 50, 25, 50, 550)



    //fill(114, 16, 230);
    //stroke(62, 18, 254);
    //circle(100,100, 30);

    //stroke(2);
    //line(0, 20, 200, 28);
    //background(pink);
}