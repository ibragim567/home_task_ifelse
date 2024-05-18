//Write a program that determines whether a given number is positive or negative.
let positiveNum = 1
let negativeNum = -1

if (positiveNum >0) {
    console.log('it is positive number');
}  else {
console.log('it is negative number');
} 

if (negativeNum <0) {
    console.log('it is negative number');
}  else {
console.log('it is positive number');
} 

//Write a program that checks if a number is even or odd.

const number = prompt("Enter a number: ");

if(number % 2 == 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}


//Write a program to determine the greater of two numbers.

let A = 10 
let B = 5  

if (A > B) {
    console.log("A is greater than B");
} else if (A < B) {
    console.log("B is greater than A");
} else {
    console.log("A and B are equal");
}

//Write a program that assigns a letter grade based on a numerical grade.

let score = 85;
let letter;

if (score > 90) {
    letter = 'A';
}
else if (score > 80) {
    letter = 'B';
}
else if (score > 70) {
    letter = 'C'
}
else if (score > 60) {
    letter = 'D'
}
else {
    letter = 'F'
}
console.log(letter);



//Write a program that calculates the ticket price based on age.

let year = 18
let ticketprice;

if (year>18 && year <20) {
    ticketprice = '25'
}
else if (year>20 && year <25 ) {
    ticketprice = '20'
}
else if (year>25 && year <30) {
    ticketprice = '15'
}
else if (year>31 && year <35) {
    ticketprice = '10'
}
else {
    ticketprice = '5'
}
console.log(ticketprice);


//Write a program that calculates a discount based on the purchase amount.

var purchaseAmount = 120; var discount;
if (purchaseAmount >= 100) { discount = 20; } else if (purchaseAmount >= 50) { discount = 10; } else { discount = 0; } console.log("Discount: " + discount + "%");


//Write a simple number guessing game.

var secretNumber = 7; var guess = 5; if (guess === secretNumber) { console.log("Congratulations! You guessed the correct number."); } else if (guess < secretNumber) { console.log("Try a higher number."); } else { console.log("Try a lower number."); }
