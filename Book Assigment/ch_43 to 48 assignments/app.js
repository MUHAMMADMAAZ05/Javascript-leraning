            //    1
let button=document.createElement("a")
button.innerHTML="Click me"
button.href="#"
button.setAttribute("onclick","alert1()")
function alert1(){
    alert("You clicked the button!")
}
document.body.prepend(button)

                    //    2

let img1=document.createElement("img")
let img2=document.createElement("img")
let img3=document.createElement("img")
img1.src="https://www.techadvisor.com/wp-content/uploads/2024/12/best-phones-2024-4.jpg?quality=50&strip=all"
img2.src="https://shop.faywamobile.com.pk/cdn/shop/files/smart4gwhitepng.png?v=1721721040&width=1445"
img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyccauRgSMYP5KnvLYLY6n2dSbBmoMA2hjWQ&s"
img1.setAttribute("onclick","m1()")
img2.setAttribute("onclick","m2()")
img3.setAttribute("onclick","m3()")
img1.style.width="300px"
img2.style.width="300px"
img3.style.width="300px"
document.body.append(img1)
document.body.append(img2)
document.body.append(img3)

function m1(){
    alert("You clicked the mob 1 !")
}
function m2(){
    alert("You clicked the mob 2 !")
}
function m3(){
    alert("You clicked the mob 3 !")
}

                            //  3

// Function to delete a row when the delete button is clicked
function deleteRow(button) {
    // Remove the row of the clicked button
    const row = button.parentNode.parentNode;
    row.remove();
}

// Function to add 10 students to the table
function addStudents() {
    // Get the table body
    const table = document.getElementById("studentTable");

    // Loop to add 10 students
    for (let i = 1; i <= 10; i++) {
        // Create a new row
        const row = document.createElement("tr");

        // Create the "Name" cell
        const nameCell = document.createElement("td");
        nameCell.textContent = `Student ${i}`; // Example: Student 1, Student 2, etc.

        // Create the "Grade" cell
        const gradeCell = document.createElement("td");
        gradeCell.textContent = i % 2 === 0 ? "A" : "B"; // Alternate grades A and B

        // Create the "Action" cell with a delete button
        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteRow(deleteButton); // Delete row when clicked
        actionCell.appendChild(deleteButton);

        // Append cells to the row
        row.appendChild(nameCell);
        row.appendChild(gradeCell);
        row.appendChild(actionCell);

        // Add the row to the table
        table.appendChild(row);
    }
}

// Run the function to add students when the page loads
window.onload = addStudents;


                // 4

function changeImage(element, newSrc) {
    element.src = newSrc;
}


                            //    5

let counter = 0;

function updateCounter(change) {
    counter += change;            
    document.getElementById('counterValue').innerText = counter;
}