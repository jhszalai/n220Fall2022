//const vowels = ["a", "e", "i", "o", "u"];
//const consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
//let userInp = document.getElementById("letterInp");


//function identVowel() {
        
//    console.log("Identify Vowel");
//    console.log("This is a vowel: " + userInp + "!");




//}
//identVowel();

//"accumulator" and "flag" strategies
function isVowel(char) {
    let lChar = 

    return false;
}


function removeVowels(inputStr) {
    let returnStr = "";
    for(let i = 0; i < inputStr.length; i++) {
        if(!isVowel(inputStr[i])) {
            returnStr += inputStr[i];
        }
    }
}