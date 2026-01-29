function change(){
    let par = document.querySelector(".para");
    par.innerText = "This is the changed text";
    par.style.backgroundColor = "red";
    par.style.fontSize = "30px";
    par.style.color = "white";
}
function Revert(){
    let par = document.querySelector(".para");
    par.innerText = "This text will be changed.";
    par.removeAttribute("style");
}