function showdate(){
    const currentDate = new Date();
    document.write(`<h1>${currentDate}</h1>`)
}

function showmonth(){
    const currentDate = new Date();
    const currentMonthName = currentDate.toLocaleString('default', { month: 'long' });
    document.write(`Current Month Name: ${currentMonthName}`); // Example: "November"
    
}

function showday(){
    let daysofweeks=["Sun","Mon","Tue","Wed","Thr","Fri","Sat"]
    const currentDate=new Date()
    const currentDayIndex = currentDate.getDay();
    const showday=daysofweeks[currentDayIndex]
    alert(`Today is ${showday}`)
}

                                //   4

// let userday=prompt("Enter a Day")

// switch (userday) {
//     case "Saturday":
//         alert("It's Fun Day")
//         break;
//     case "Sunday":
//         alert("It's Fun Day")
//     default:
//         alert("It's not a fun day")
//         break;
// }


                        // 5

// const currentDate = new Date();
// const day = currentDate.getDate();
// if (day < 16) {
//     console.log("First fifteen days of the month");
// } else {
//     console.log("Last days of the month");
// }

                            // 6

// let millisecondsSince1970 = currentDate.getTime();
// let minutesSince1970 = Math.floor(millisecondsSince1970 / (1000 * 60));
// console.log(`Minutes since midnight, Jan. 1, 1970: ${minutesSince1970}`);

                            //  7

// const hour = currentDate.getHours();
// if (hour < 12) {
//     console.log("It's AM");
// } else {
//     console.log("It's PM");
// }

                        //   8

// Create a Date object for October 31, 2024
// const laterDate = new Date(2024, 9, 31); // Month is 0-based, so 11 is December
// console.log(`Later Date: ${laterDate}`);

                //  9

// Create the date object for 1st Ramadan (June 18, 2015)
// let ramadanStart = new Date("June 18, 2015");

// let currentDate = new Date();

// // Calculate the time difference in milliseconds
// let timeDifference = currentDate - ramadanStart;

// // Convert the time difference to days
// let daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// // Display the result
// alert(`Number of days passed since 1st Ramadan: ${daysPassed}`);


        //   10

// // Reference date (January 1, 2015)
// let start2015 = new Date("January 1, 2015");

// // Get the current date
// let currentDate = new Date();

// // Calculate time difference in milliseconds
// let timeDifference = currentDate - start2015;

// // Convert to seconds
// let secondsElapsed = Math.floor(timeDifference / 1000);

// // Display the result
// document.write(`Seconds elapsed since January 1, 2015: ${secondsElapsed}`);



            //   11


// // Create a Date object for the current date and time
// let currentDate = new Date();

// // Extract and log current hours
// let currentHours = currentDate.getHours();
// console.log(`Current hours: ${currentHours}`);

// // Add 1 hour to the Date object
// currentDate.setHours(currentDate.getHours() + 1);

// // Display the updated Date object
// document.write(`Updated date and time (1 hour ahead): ${currentDate}`);


                //  12

// Create a Date object for the current date
// let currentDate = new Date();

// // Subtract 100 years from the current date
// let pastDate = new Date(currentDate);
// pastDate.setFullYear(currentDate.getFullYear() - 100);

// // Display the result in an alert box
// alert(`Date 100 years back: ${pastDate}`);



                        //    13
 
// Ask user for their age
// let userAge = prompt("Enter your age:");

// // Get the current year
// let currentYear = new Date().getFullYear();

// // Calculate the birth year
// let birthYear = currentYear - userAge;

// // Display the birth year
// document.write(`Your birth year is: ${birthYear}`);


// 14         

// Fields for K-Electric bill
// let customerName = prompt("Enter Customer Name:");
// let currentMonth = new Date().toLocaleString('default', { month: 'long' });
// let numberOfUnits = parseFloat(prompt("Enter the number of units:"));
// let chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));

// // Calculate Net Amount Payable
// let netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);

// // Late Payment Surcharge
// let latePaymentSurcharge = 500; // Example surcharge

// // Calculate Gross Amount Payable
// let grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

// // Display the K-Electric bill
// document.write(`
//     <h1>K-Electric Bill</h1>
//     <p><b>Customer Name:</b> ${customerName}</p>
//     <p><b>Month:</b> ${currentMonth}</p>
//     <p><b>Number of Units:</b> ${numberOfUnits}</p>
//     <p><b>Charges per Unit:</b> ${chargesPerUnit}</p>
//     <p><b>Net Amount Payable (within Due Date):</b> ${netAmount}</p>
//     <p><b>Late Payment Surcharge:</b> ${latePaymentSurcharge}</p>
//     <p><b>Gross Amount Payable (after Due Date):</b> ${grossAmount}</p>
// `);
