                                        // 1

// var city=prompt("Enter Your city name")

// if (city=="karachi" || city=="Karachi"){
//     document.write("Wellcome to City of lights")
//     console.log("Wellcome to city of ligts")
// } else{
//     document.write("Wellcome to the " +city)
//     console.log ("Wellcome to the " +city)
// }


                                                //  2

// var gender=prompt("Enter Your Gender You are Male or Female")

// if (gender=="Male"){
//     document.write("Good Morning Sir")
//     console.log("Good Morning Sir")
// } else if (gender=="Female"){       
//     document.write("Good Morning Madam")
//     console.log("Good Morning Madam")
// } else{
//     document.write("Wellcome to the " +gender)
// }

                                            // 3

// var signalColor = prompt("Enter the traffic signal color:");
// if (signalColor.toLowerCase() === "red") {
// alert("Must Stop");
// } else if (signalColor.toLowerCase() === "yellow") {
// alert("Ready to move");
// } else if (signalColor.toLowerCase() === "green") {
// alert("Move now");
// }
                                            

                                            //    4


// var remaningfuel=prompt("Enter Remaining Fuel in litters")

// if (remaningfuel < 0.25 ){
//     document.write("Please refuel your car")
//     console.log("Please refuel your car")
// }else{
//     document.write("You have enough fuel to reach your destination")
//     console.log("You have enough fuel to reach your destination")
// }

                                        // 5


// 1.    is Right

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }    

// 2.    is Wrong

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// 3.    is  condition 2 is true

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// 4.    is  Right

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


// 5.    is  True

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// 6.    is  Right

//  if("car" < "cat"){
// alert("car is smaller than cat");
// }
    

                                        //  6

// var totalMarks = 300;
// var marks1 = parseInt(prompt("Enter marks for subject 1:"));
// var marks2 = parseInt(prompt("Enter marks for subject 2:"));
// var marks3 = parseInt(prompt("Enter marks for subject 3:"));

// var obtainedMarks = marks1 + marks2 + marks3;
// var percentage = (obtainedMarks / totalMarks) * 100;
// percentage = Math.round(percentage);

// var grade, remarks;
// if (percentage >= 80) {
//     grade = 'A+';
//     remarks = 'Excellent';
// } else if (percentage >= 70) {
//     grade = 'A';
//     remarks = 'Good';
// } else if (percentage >= 60) {
//     grade = 'B';
//     remarks = 'You need to improve';
// } else if (percentage >= 50) {
//     grade = 'C';
//     remarks = 'Poor';
// } else {
//     grade = 'Fail';
//     remarks = 'Sorry';
// }

// document.write("<h1>MARK  SHEET </h1>" + "<br>" + "<br>"+ "<br>")
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);


                                //    7

// var secretNumber = 7;  // Assume the secret number is 7
// var guess = parseInt(prompt("Guess the secret number (1 to 10):"));

// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// }else{
//     alert("Try again");
// }


                                //  8

// var number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// }else{
//     alert("The number is not divisible by 3");
// }

                                    //  9

// var number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     alert("The number is even");
// } else {
//     alert("The number is odd");
// }


                                // 10

// var temperature = parseFloat(prompt("Enter the temperature:"));

// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today's weather is so Cool.");
// }


                                //    11

// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;
// if (operation === '+') {
//     result = num1 + num2;
// } else if (operation === '-') {
//     result = num1 - num2;
// } else if (operation === '*') {
//     result = num1 * num2;
// } else if (operation === '/') {
//     result = num1 / num2;
// } else if (operation === '%') {
//     result = num1 % num2;
// }

// alert("Result: " + result);
