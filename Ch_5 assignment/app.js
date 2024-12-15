// 1

var x=+prompt("Enter 1st Number")
var y=+prompt("Enter 2nd Number")
document.write("Sum of "+x+" and "+y+" is "+(x+y)+"<br>")

// 2

var num;
document.write("Value after variable declaration is undefined. <br>")
num=5
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is: " + remainder+  "<br>");



// 3

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("The cost of buying 5 movie tickets is: " + totalCost + " PKR" + "<br>");


// 4

var number =+prompt("Enter number which table you want")
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write(number + " x " + i + " = " + result + "<br>");
}