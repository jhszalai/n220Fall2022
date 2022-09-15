//start of line
let beginLine = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function distance(p1, p2) {
  
    let dx = p1.x - p2.x;
    let dy = p1.y - p2.y;
    
    //return the distance
     return Math.sqrt(dx*dx + dy*dy);
  }

function draw() {
  background(220);
  
  if(mouseIsPressed) {
    beginLine.x = mouseX;
    beginLine.y = mouseY;
  }
  
  //len is short for length of line
  let len = distance( beginLine, { x: mouseX, y: mouseY });
  
  if(len > 120) {
    stroke("#FF0000");
  } else  {
    stroke("#000000");
  }
  
  line(beginLine.x, beginLine.y, mouseX, mouseY);
}
