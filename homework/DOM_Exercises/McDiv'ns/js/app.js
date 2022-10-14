//Jena Szalai
//N220 Fall
//9-29-2022

//create mcDv variable and call DIV element
let mcDV = document.getElementById("mc");

//create tally variable 
let tally = 0;

//define Btn Function
function Btn() {
    //set innerHTML to mc text
    mcDV.innerHTML = "mc";
    //add 1 to tally every click of the mouse
    tally = tally + 1;
    //since 1 is added to tally after every click, after three clicks, the innerHTML displays divdivdiv
    if(tally > 2) mcDV.innerHTML = "divdivdiv";

}
//Stylize DIV element
mcDV.style.backgroundColor = "#F23D3D";
mcDV.style.width = "100px";
mcDV.style.height = "100px";