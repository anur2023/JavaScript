const btn = document.getElementById("btn");
const statusText = document.getElementById("status");
const userBox = document.getElementById("user");
const postList = document.getElementById("posts");
// const input = document.querySelector(".id").value;

btn.addEventListener("click", loadData);

async function loadData(){
      const input = document.querySelector(".id").value;
        console.log(input);
  if(input === ""){
    alert("Please enter user id");
    return;
  }



  statusText.textContent = "Loading User...";

  try{

    // 1. Fetch User
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${input}`
    );

    const user = await userResponse.json();
    if(!user.id){
  alert("Record not found");
  statusText.textContent = "Failed";
  return;
}

    userBox.textContent = `Name: ${user.name} | Email: ${user.email}`;

    // 2. Fetch Posts of that User
    statusText.textContent = "Loading Posts...";

    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );

    const posts = await postResponse.json();

    postList.innerHTML = "";

    posts.forEach(post=>{
      const li = document.createElement("li");
      li.textContent = post.title;
      postList.appendChild(li);
    });

    statusText.textContent = "Done";

  }catch(error){
    statusText.textContent = "Failed";
    console.log(error);
  }
}
