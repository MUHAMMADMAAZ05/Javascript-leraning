                        //    1
function displayFormData(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Submitted Data:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;
}


                        //  2

function toggleDetails(button) {
    const detailsDiv = document.getElementById("details");
    if (detailsDiv.style.display === "none") {
        detailsDiv.style.display = "block";
        button.textContent = "Read Less";
    } else {
        detailsDiv.style.display = "none";
        button.textContent = "Read More";
    }
}



