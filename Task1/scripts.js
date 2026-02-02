const button = document.getElementById("loadBtn");
const output = document.getElementById("output");
const idInput = document.querySelector(".ids");

button.addEventListener("click", loadUser);

async function loadUser() {

    const userId = idInput.value;

    if(userId === ""){
        output.innerHTML = "Please enter user id";
        return;
    }

    output.innerHTML = "<p class='loading'>Loading...</p>";

    try {
        const response = await fetch(
            `https://dummyjson.com/users/${userId}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const user = await response.json();
        console.log(user);
        output.innerHTML = `
            <h3>${user.firstName}</h3>
            <p>Email: ${user.email}</p>
            <p>City: ${user.address.country}</p>
           
        `;

    } catch (error) {
        output.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}
