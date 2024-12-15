                                //   1

// var a=10;
// document.write("Result: " + "<br>")
// document.write("The value of a is : "+ a + "<br>")
// document.write("<br>")
// document.write("*****************")
// document.write("<br>")
// document.write("<br>")
// document.write("The value of ++a is : "+ ++a + "<br>")
// document.write("Now The value of a is : "+ a + "<br>")
// document.write("<br>")
// document.write("The value of a++ is : "+ a++ + "<br>")
// document.write("Now The value of a is : "+ a + "<br>")
// document.write("<br>")
// document.write("The value of --a is : "+ --a + "<br>")
// document.write("Now The value of a is : "+ a + "<br>")
// document.write("<br>")
// document.write("The value of a-- is : "+ a-- + "<br>")
// document.write("Now The value of a is : "+ a + "<br>")
// document.write("<br>")

                                    //    2


// var a=2,b=1;
// var result = --a - --b + ++b + b--;
// console.log("--a : " + --a + "<br>")
// console.log("--a - --b : " + (--a - --b) + "<br>")
// console.log("--a - --b + ++b : " + (--a - --b + ++b)+ "<br>")
// console.log("--a - --b + ++b + b-- : " + (--a - --b + ++b + b--) + "<br>")
// document.write("a is : "+ a +"<br>")
// document.write("b is : "+ b +"<br>")
// document.write("Result is : " + result + "<br>")



                                        //  3



// var userName = prompt("Please enter your name:");
// alert("Hello, " + userName + " Welcome.");



                                        // 4


// var number = prompt("Enter a number for multiplication table:", 5);
// if (number === null || number === "") {
//     number = 5;
// }
// // number = parseInt(number);
// document.write("<h3>Multiplication Table of " + number + "</h3>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }


                                    //   5

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");
var totalMarksPerSubject = 100;
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalMarks = totalMarksPerSubject * 3; // Total marks for 3 subjects
var percentage1 = (obtainedMarks1 / totalMarksPerSubject) * 100;
var percentage2 = (obtainedMarks2 / totalMarksPerSubject) * 100;
var percentage3 = (obtainedMarks3 / totalMarksPerSubject) * 100;
var overallPercentage = (totalObtainedMarks / totalMarks) * 100;


document.write("<h3>Marks Sheet</h3>");
document.write("<table>");
document.write("<tr><th> Subject </th><th> Total Marks </th><th> Obtained Marks </th><th> Percentage </th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");
document.write("<tr><td><strong>Total</strong></td><td><strong>" + totalMarks + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td><td><strong>" + overallPercentage.toFixed(2) + "%</strong></td></tr>");
document.write("</table>");
