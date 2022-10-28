//Jena Szalai
//N220
//10/27/2022

let userName = document.getElementById("username");
let passWord = document.getElementById("password");
let btnClk = document.getElementById("btn");
let result = document.getElementById("resultRead");


function clickFunct() {
    if ((userName.value == "username") && (passWord.value == "password")) {
        result.innerHTML = "Success";
    } else {
        result.innerHTML = "Wrong Information";
    }
};


