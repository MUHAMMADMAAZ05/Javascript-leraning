//                         //  1

// let userInput=+prompt("Enter a Postive Number")
// if (userInput >= 0){
// console.log("The number which is user input this is "+ userInput)
// console.log("Round of  Value ==> " + Math.round(userInput))
// console.log("Floor  Value ==> " + Math.floor(userInput))
// console.log("Ceil  Value ==> " + Math.ceil(userInput))
// }else{
//     console.log("Please ENter Postive Number")
// }


//                                 //  2

// // let userInput=+prompt("Enter a Negative Number")
// if (userInput < 0){
// console.log("The number which is user input this is "+ userInput)
// console.log("Round of  Value ==> " + Math.round(userInput))
// console.log("Floor  Value ==> " + Math.floor(userInput))
// console.log("Ceil  Value ==> " + Math.ceil(userInput))
// }else{
//     console.log("Please ENter Negative Number")
// }


                                    // 3

// let useriNput=prompt("Enter a Number")
// if (useriNput >= 0){
//     console.log(`The absolute value is ${useriNput} is ${useriNput}`)
// }else if(useriNput < 0){
//     console.log(`The absolute value is ${useriNput} is ${Math.abs(useriNput)}`)
// }

                            //  4

function rollDice() {
    // Generate a random number between 1 and 6
    const diceValue = Math.floor(Math.random() * 6) + 1;

    // Display the result in the 'diceResult' element
    document.getElementById("diceResult").textContent = diceValue;
}


                    //  5

function coinvalue(){
        //   Generate a random number between 1 and 2
    const CoinValue = Math.floor(Math.random() * 2) + 1;
    if(CoinValue==2){
        document.write("Random Coin Value : Head")
    }else if(CoinValue==1){
        document.write("Random Coin Value : Tail")
        }
}

                    //  6

function randomNumber(){
    const randomValue = Math.floor(Math.random() * 100) + 1;
    document.write(`Random Number Between 1 to 100 : ${randomValue}`)
}


                                //    7


function parseWeight() {
    // Get the user's input from the text box
    let userInput = document.getElementById('weightInput').value;
    
    // Normalize the input to lower case
    userInput = userInput.toLowerCase();

    // Remove non-numeric characters, keeping the decimal point
    if (userInput.includes('kgs') || userInput.includes('kilograms')) {
        // Remove the unit part from the input
        userInput = userInput.replace(/kgs|kilograms/g, '').trim();
    }
    
    // Convert the remaining input to a number
    let weight = parseFloat(userInput);

    // Check if the input is a valid number
    if (!isNaN(weight)) {
        document.getElementById('result').innerText = `Your weight is: ${weight} kilograms`;
    } else {
        document.getElementById('result').innerText = 'Invalid input! Please enter a valid weight.';
    }
}

                            //   8


const secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let userInput = document.getElementById('userInput').value;
    userInput = parseInt(userInput);
    if (isNaN(userInput) || userInput < 1 || userInput > 10) {
        document.getElementById('result1').innerText = 'Please enter a valid number between 1 and 10.';
    } else {
        // Compare the user input with the secret number
        if (userInput === secretNumber) {
            document.getElementById('result1').innerText = 'Congratulations! You guessed the correct number!';
        } else {
            document.getElementById('result1').innerText = `Oops! . Try again!`;
        }
    }
}
