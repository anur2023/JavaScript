let obj = document.querySelector(".main");
let copy = obj.innerText;
function RemoveText(){
    let obj = document.querySelector(".main");
    obj.innerText = "";
    obj.style.remove();
}
function GetBack(){
    let obj = document.querySelector(".main");
    obj.innerText = copy;
    
}