//Jena Szalai
//N220
//10/27/2022



let tipText = document.getElementById("tipRead");
let totalText = document.getElementById("totalRead");
let bill = document.getElementById("name");

function Btn() {
    let tip = (bill.value * 0.15);
    let total =  tip + Number(bill.value);
    console.log(total);
    tipText.innerHTML = tip;
    totalText.innerHTML = total;
};