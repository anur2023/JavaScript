 let box = document.querySelector(".main");
 let copy = box.innerText;
function MouseOn(){
    box.innerText = "This is text effect of hovering the mouse over the div box."
}
function MouseOff(){
     document.querySelector(".main").innerText = copy;
}