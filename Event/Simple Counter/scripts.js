let box = document.querySelector(".main");
let copy = Number(box.innerText);
function Increase(){
    copy += 1;
    box.innerText = copy;
}
function Decrease(){
    copy -= 1;
    box.innerText = copy;
}