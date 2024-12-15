                            // 1
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + " !");


                    //    2

// let mobileModel = prompt("Enter your favorite mobile phone model:");
// alert("Length of your input: " + mobileModel.length);


        //   3

// let word = "Pakistani";
// let index = word.indexOf("n");
// alert("Index of 'n': " + index);

    //  4
// let phrase = "Hello World";
// let lastIndex = phrase.lastIndexOf("l");
// alert("Last index of 'l': " + lastIndex);


        //    5

// let word = "Pakistani";
// let character = word.charAt(3);
// alert("Character at 3rd index: " + character);

                        //   6

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullNameConcat = firstName.concat(" ", lastName);
// alert("Hello, " + fullNameConcat + "!");

                    //  7

// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");
// alert(newCity);

                //  8

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage = message.replace(/and/g, "&");
// alert(newMessage);

        //  9

// let str = "472";
// document.write("Value: " + str + " Type: " + typeof str + "</br>");
// let num = Number(str);
// document.write("Value: " + num + " Type: " + typeof num);


            //   10

// let userInput = prompt("Enter something:");
// document.write("User Input: " + userInput + "</br>");
// document.write("Uppercase: " + userInput.toUpperCase());

        //    11

// let input = prompt("Enter something:");
// let titleCase = input.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// document.write("User Input: " + input + "</br>");
// document.write("Title Case: " + titleCase);

    //   12

// let num = 35.36;
// let strNum = num.toString().replace(".", "");
// alert(strNum);

            //  13

// let username = prompt("Enter your username:");

// function isValidUsername(username) {
//   for (let i = 0; i < username.length; i++) {
//     let charCode = username.charCodeAt(i);
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//       return false;
//     }
//   }
//   return true;
// }

// if (isValidUsername(username)) {
//   alert("Username accepted: " + username);
// } else {
//   alert("Please enter a valid username without special symbols [@ . , !]");
// }

                                                // 14

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Enter an item to search:").toLowerCase();

// let foundIndex = -1;

// // Check for the item and get its index
// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         foundIndex = i
//         break;
//     }
// }

// if (foundIndex !== -1) {
//     alert(`${userInput} is available at index no ${foundIndex} in the list.`);
// } else {
//     alert(`${userInput} is not available in the list.`);
// }


                                // 15

// let password = prompt("Enter your password:");

// function validatePassword(password) {
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         return false;
//     }
//     if (!/^[a-zA-Z]/.test(password)) {
//         alert("Password must not start with a number.");
//         return false;
//     }
//     if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
//         alert("Password must contain both alphabets and numbers.");
//         return false;
//     }
//     return true;
// }

// if (validatePassword(password)) {
//     alert("Password is valid.");
// } else {
//     alert("Please enter a valid password.");
// }



                        //      16

// let university = "University of Karachi";
// let array = university.split("");

// array.forEach(char => document.write(char+"<br>"));


                        //      17

// let userInput = prompt("Enter some text:");
// if (userInput) {
//     let lastChar = userInput.charAt(userInput.length - 1);
//     alert(`The last character is: ${lastChar}`);
// }


                        // 18
                        
// let str = "The quick brown fox jumps over the lazy dog";
// let count = (str.toLowerCase().match(/the/g) || []).length;

// alert(`The word "the" appears ${count} times in the string.`);
