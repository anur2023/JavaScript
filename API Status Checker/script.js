const button = document.getElementById("checkBtn");
const statusText = document.getElementById("status");
const table = document.getElementById("tableBody");

button.addEventListener("click", checkAPI);

async function checkAPI(){

  // Read ID when button is clicked
  const id = document.querySelector(".id").value;

  if(id === ""){
    alert("Please enter ID");
    return;
  }

  statusText.textContent = "Loading...";

  try{

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if(response.ok){

      statusText.textContent = "Success";

      const text = await response.json();

      table.innerHTML = `
        <tr>
          <td>${text.id}</td>
          <td>${text.title}</td>
          <td>${text.body}</td>
        </tr>
      `;
    }
    else{
      statusText.textContent = "Failed";
    }

  }catch(error){
    statusText.textContent = "Failed";
  }
}
