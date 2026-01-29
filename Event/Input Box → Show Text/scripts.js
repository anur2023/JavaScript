function FetchBoxDetails(){
    let box = document.querySelector(".input");
    if(box.value === ""){
        alert("Please enter some value.")
    }
    else{
    let copy = box.value;
    box.value = "";
    document.querySelector(".main").innerText = copy;
    }

}
