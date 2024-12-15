// //  1. Declare an empty array using JS literal notation
// var studentNames = [];

// //  2. Declare an empty array using JS object notation
// var studentNames = new Array();

// // 3. Declare and initialize a strings array
// var stringsArray = ["apple", "banana", "cherry"];

// // 4. Declare and initialize a numbers array
// var numbersArray = [10, 20, 30];


// //  5. Declare and initialize a boolean array
// var booleanArray = [true, false, true];


// //  6. Declare and initialize a mixed array
// var mixedArray = ["text", 100, true];


// //  7. Declare and Initialize an array of qualifications and display it
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("<h2>Qualifications:</h2>");
// for (var i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }


//  8. Store 3 student names and their scores, display scores and percentages
// var studentNames = ["Alice", "Bob", "Charlie"];
// var studentScores = [400, 350, 450];
// var totalMarks = 500;

// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (studentScores[i] / totalMarks) * 100;
//     document.write(studentNames[i] + " scored " + studentScores[i] + " out of " + totalMarks + ". Percentage: " + percentage.toFixed(2) + "%<br>");
// }


// //  9. Manipulate colors in the array
// var colors = ["Red", "Green", "Blue"];

// // a. Add color to the beginning
// var colorToAddBeginning = prompt("Enter a color to add at the beginning:");
// colors.unshift(colorToAddBeginning);
// document.write("Updated array: " + colors + "<br>");

// // b. Add color to the end
// var colorToAddEnd = prompt("Enter a color to add at the end:");
// colors.push(colorToAddEnd);
// document.write("Updated array: " + colors + "<br>");

// // c. Add two more colors at the beginning
// colors.unshift("Yellow", "Orange");
// document.write("Updated array: " + colors + "<br>");

// // d. Delete the first color
// colors.shift();
// document.write("Updated array: " + colors + "<br>");

// // e. Delete the last color
// colors.pop();
// document.write("Updated array: " + colors + "<br>");

// // f. Add color at a specific index
// var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
// var colorToAdd = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("Updated array: " + colors + "<br>");

// // g. Delete colors at a specific index
// var indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
// var numberOfColorsToDelete = parseInt(prompt("How many colors to delete?"));
// colors.splice(indexToDelete, numberOfColorsToDelete);
// document.write("Updated array: " + colors + "<br>");


// //  10. Sort student scores in ascending order
// var studentScores = [320, 230, 480, 120];
// studentScores.sort(function(a, b) {
//     return a - b;
// });
// document.write("Sorted scores: " + studentScores);


// //  11. Copy city names from one array to another
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(1, 4);
// document.write("Selected cities: " + selectedCities);


// //  12. Create a single string from an array using join
// var arr = ["This ", "is ", "my ", "cat"];
// var sentence = arr.join("");
// document.write(sentence);

                                                // 13

// let queue = [];

// // Add values one by one
// queue.push(10); // Add 10
// queue.push(20); // Add 20
// queue.push(30); // Add 30

// // Access values in FIFO order
// let firstValue = queue.shift(); // Removes 10 (first in)
// let secondValue = queue.shift(); // Removes 20 (second in)
// let thirdValue = queue.shift(); // Removes 30 (third in)

// // Output the values
// console.log(firstValue);  // Output: 10
// console.log(secondValue); // Output: 20
// console.log(thirdValue);  // Output: 30



// //  14. Last In First Out (LIFO)
// Create an empty array (stack)
// let stack = [];

// // Add values one by one
// stack.push(10); // Add 10
// stack.push(20); // Add 20
// stack.push(30); // Add 30

// // Access values in LIFO order
// let lastValue = stack.pop(); // Removes 30 (last in)
// let secondLastValue = stack.pop(); // Removes 20 (second last in)
// let thirdLastValue = stack.pop(); // Removes 10 (third last in)

// // Output the values
// console.log(lastValue);        // Output: 30
// console.log(secondLastValue);  // Output: 20
// console.log(thirdLastValue);   // Output: 10



// //  15. Store phone manufacturers and display dropdown
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (var i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");


