                                // 1

function displayDateTime() {
    let currentDate = new Date();
    document.write(`<h1> Current Date & Time:   ${currentDate} </h1>`);
}
displayDateTime();

                        // 2

function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}

// let fname=prompt("Enter first name")
// let lname=prompt("Enter last name")
greetUser("Maaz","Shaikh");

                        //  3

function addNumbers(num1, num2) {
    return num1 + num2;
}
let result = addNumbers(5, 10);
document.write("Sum: " + result + "<br>");

                            //    4

function calculator(num1, num2, operator) {
    let result;
    if (operator === "+") result = num1 + num2;
    else if (operator === "-") result = num1 - num2;
    else if (operator === "*") result = num1 * num2;
    else if (operator === "/") result = num1 / num2;
    else result = "Invalid Operator";
    return result;
}
let output = calculator(10, 5, "*");
document.write("Result: " + output + "<br>");

                //  5

function squareNumber(num) {
    return num * num;
}
let squared = squareNumber(7);
document.write("Square: " + squared + "<br>");

                //  6

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}
let fact = factorial(5);
document.write("Factorial: " + fact + "<br>");

                            // 7

function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
displayCounting(1, 7);

                // 8

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }
    let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    document.write("Hypotenuse: " + hypotenuse  + "</br>");
}
calculateHypotenuse(3, 4);


                //    9

// i. Arguments as Values
function areaRectangle(width, height) {
    return width * height;
}
let area1 = areaRectangle(6, 12);

// ii. Arguments as Variables
let w = 6, h = 12;
let area2 = areaRectangle(w, h);

document.write("Area 1: " + area1 + "<br>");
document.write("Area 2: " + area2 + "<br>");

                //    10

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
let check = isPalindrome("oppo");
document.write("Is Palindrome? " + check + "<br>");

                        //    11
 
function capitalizeWords(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}
let resultString = capitalizeWords("the quick brown fox this <br>");
document.write(resultString);

                    // 12

function findLongestWord(str) {
    let words = str.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) longest = word;
    }
    return longest;
}
let longestWord = findLongestWord("Web Development Tutorial");
document.write("Longest Word: " + longestWord + "<br>");

                    //   13

function countOccurrences(str, letter) {
    let count = 0;
    for (let char of str) {
        if (char === letter) count++;
    }
    return count;
}
let letterCount = countOccurrences("JSResourceS.com", "o");
document.write("Occurrences: " + letterCount +"<br>");

            //    14

function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference + "<br>");
}
function calcArea(radius) {
    let area = Math.PI * radius * radius;
    document.write("The area is " + area);
}
calcCircumference(5);
calcArea(5);