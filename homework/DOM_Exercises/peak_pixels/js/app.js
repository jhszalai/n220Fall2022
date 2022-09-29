//Jena Szalai
//N220 Fall
//9-29-2022


//fetch "square" DIV
let dvBox = document.getElementById('square');

//create variables for "square" width and height
let boxWidth = "100";
let boxHeight = "100";




//squareDV.innerHTML = "box";
dvBox.style.backgroundColor = "#9AEBA3";
dvBox.style.height = boxHeight + "px";
dvBox.style.width = boxWidth + "px";

function bigger() {
    boxHeight =  boxHeight * "1.1";
    boxWidth =  boxWidth * "1.1";
    dvBox.style.height = boxHeight + "px";
    dvBox.style.width = boxWidth + "px";
    console.log(boxHeight);
    console.log(boxWidth);
}
