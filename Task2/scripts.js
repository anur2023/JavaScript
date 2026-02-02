const API_URL = "https://devptdyfhbhtnsoxzjyi.supabase.co/rest/v1/User";

const API_KEY = "sb_publishable_sca6wLLNgtUq6cyTcQHZ_A_tHYseUP4";

// ---------------------
// POST DATA
// ---------------------
async function saveUser(){

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const mobile = document.getElementById("mobile").value;
  const age = document.getElementById("age").value;

  const response = await fetch(API_URL,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "apikey":API_KEY,
      "Authorization":"Bearer " + API_KEY
    },
    body: JSON.stringify({
      Name:name,
      Address:address,
      Mobile:mobile,
      Age:age
    })
  });

  if(response.ok){
    
    // loadUsers();
    // document.getElementById("user-form").reset();
    alert("User Saved Successfully");

  }
  else{
    alert("Error Saving Data");
  }
}

// ---------------------
// GET DATA
// ---------------------
async function loadUsers(){
    let idn = document.querySelector("#id-num").value;
  const response = await fetch(API_URL + `?id=eq.${idn}`,{
    headers:{
      "apikey":API_KEY,
      "Authorization":"Bearer " + API_KEY
    }
  });

  const data = await response.json();

  const table = document.getElementById("tableBody");
  table.innerHTML = "";
  alert(`Data fetched successfully of id ${idn}`)
  data.forEach(user=>{
    table.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.Name}</td>
        <td>${user.Address}</td>
        <td>${user.Mobile}</td>
        <td>${user.Age}</td>
      </tr>
    `;
  });
}
