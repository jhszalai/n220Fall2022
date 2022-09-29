//Jena Szalai
//N220 Fall
//9-29-2022


let mcDV = document.getElementById("mc");

let tally = 0;

function Btn() {
    mcDV.innerHTML = "mc";
    tally = tally + 1;
    if(tally > 2) mcDV.innerHTML = "divdivdiv";

}
mcDV.style.backgroundColor = "#F23D3D";
mcDV.style.width = "100px";
mcDV.style.height = "100px";