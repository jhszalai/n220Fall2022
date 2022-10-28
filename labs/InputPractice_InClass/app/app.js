let myArray = ["Good luck","Bad luck","You'll Make It"];


function fortune() {
    let cookie = document.getElementById("greeting");
    cookie.innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
    
};