let counter = 0;

const btn = document.getElementById("btn");
const countText = document.getElementById("count");

btn.addEventListener("click", increaseCounter);

// Promise wrapper for setTimeout
function delay(ms){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    }, ms);
  });
}

async function increaseCounter(){

  // wait 1 second
  await delay(1000);

  counter++;

  countText.textContent = counter;
}
