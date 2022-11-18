let block1 = document.getElementById("sq1");
let block2 = document.getElementById("sq2");
let block3 = document.getElementById("sq3");

block1.style.height = "200px";
block1.style.width = "200px";
block1.style.backgroundColor = "red";
block1.style.float = "left";
block1.style.margin = "5px";

block2.style.height = "200px";
block2.style.width = "200px";
block2.style.backgroundColor = "green";
block2.style.float = "left";
block2.style.margin = "5px";

block3.style.height = "200px";
block3.style.width = "200px";
block3.style.backgroundColor = "blue";
block3.style.float = "left";
block3.style.margin = "5px";

function colorChange() {
    block1.style.backgroundColor = "blue";
    block2.style.backgroundColor = "red";
    block3.style.backgroundColor = "green";
}