let colorSquare = document.getElementById("block1");
let calcSquare = document.getElementById("block2");
let across1 = document.getElementsByClassName("row1");
let r = 0;
let g = 0;
let b = 0;
let element = document.getElementById("mix")

element.addEventListener("click",clicked)


colorSquare.style.height = "200px";
colorSquare.style.width = "800px";

colorSquare.style.margin = "auto";

calcSquare.style.padding = "30px";
calcSquare.style.textAlign = "center";





function clicked(event) {
    colorSquare.style.backgroundColor = "rgb("+ r +", "+ g +", "+ b + ")";
    let clr = event.target.getAttribute("clr");
    let addBy = Number(event.target.getAttribute("addBy"));

    console.log(clr);
    console.log(addBy);

    if (clr == "red"); {
        if (addBy == 1) {
            r += addBy;
        }
        if (addBy == 5) {
            r += addBy;
        }
        if (addBy == 10) {
            r += addBy;
        }
    }

    if (clr == "green"); {
        if (addBy == 1) {
            g += addBy;
        }
        if (addBy == 5) {
            g += addBy;
        }
        if (addBy == 10) {
            g += addBy;
        }
    }

    if (clr == "blue"); {
        if (addBy == 1) {
            b += addBy;
        }
        if (addBy == 5) {
            b += addBy;
        }
        if (addBy == 10) {
            b += addBy;
        }
    }


}