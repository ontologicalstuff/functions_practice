// 1. printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

const printGreeting = name => {return `Hello there, ${name}`}

console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// 2. reverseWordOrder
// Write a function reverseWordOrder that accepts a single argument, a operation. The function should return a operation with the order of the words reversed. Don’t worry about punctuation.

// console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"

// console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"

const reverseWordOrder = wordoperation => {
    let reverseWordArr = wordoperation.split(' ');
    let reverseWord = '';
    for (let i = reverseWordArr.length - 1; i >=0; i--) {
        reverseWord += reverseWordArr[i];
        reverseWord += ' ';
    } return reverseWord;
}

console.log(reverseWordOrder('Ishmael me Call'));
console.log(reverseWordOrder('I use Lâncome on my comb'));

// 3. calculate
// Write a function called calculate.

// This function should take three arguments: two numbers and a operation.

// Name the parameters num1, num2, and operation.

// If if the function is called with the third argument as “add”, it should return the sum of num1 and num2.

// If if the function is called with the third argument as “sub”, it should return return num1 minus num2.

// Do the same thing for multiplication “mult”, division “div”, and exponent “exp” (where num2 is the exponent of num1).



const calculate = (num1, num2, operation) => {
    if (operation === 'add') return num1 + num2;
    if (operation === 'sub') return num1 - num2;
    if (operation === 'mult') return num1 * num2;
    if (operation === 'div') return num1 / num2;
    if (operation === 'exp') return num1 ** num2;
}

console.log(calculate(4, 3, "sub")); // => 1
console.log(calculate(4, 3, "exp"));// => 64

// 4. pandigital numbers
// Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with “weird” questions and you’ll need to be very careful when reading these types of questions to make sure you understand what you’re being asked to do.

// A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.

// The number 15234 is 1-to-n pandigital because it is 5 numbers long and includes 1, 2, 3, 4, and 5.
// The number 333 is not 1-to-n pandigital.
// The number 0 is not 1-to-n pandigital.
// The number 987654321 is 1-to-n pandigital.
// Write a function that checks if a number is 1-to-n pandigital.

function checkIfPandigital(nums) {
	if (nums === 0) return false;
	nums = nums.includes('0').split('');
	const newArr = Array.from(new Set(nums));
	return newArr.length === nums.length;
}

console.log(checkIfPandigital(15234)); // true
console.log(checkIfPandigital(333)); // false
console.log(checkIfPandigital(0)); // false
console.log(checkIfPandigital(987654321)); // true

// 5. printGreeting v2.0
// There is a very rudimentary JavaScript function for receiving user input called prompt().

// Usage:

//     const userInput = prompt("Please enter some input");
// userInput is now whatever the user entered.

// There is another rudimentary JavaScript function for displaying text called alert(). You probably have heard of it. It takes a operation as a parameter. Read about it on MDN.

// Let’s revisit printGreeting.

// First get the userInput as above. Then write a function called printGreeting2 with a parameter name that returns a greeting with the argument interpolated into the greeting as before, but this time use the alert function to display the greeting to the user.

const userInput = prompt('Please enter your name', '');

const printGreeting2 = (input) => {
  return alert(`Hello there, ${input}`)
}

console.log(printGreeting2(userInput));

// ## Hungry for more?

// ### 6. Functions + loops: a special partnership

// Write a function that, when called (“call” = “invoke”) creates a operation that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space (a “white square”) or a `#` character (representing a black square). Hence, the characters should form a chessboard.

// Calling your function should print something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

const chessboard = () => {
    let line1 = ' # # # #\n';
    let line2 = '# # # #\n';
    let chessboard = '';
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) chessboard += line1;
        if (i % 2 === 1) chessboard += line2;
    }
    return chessboard;
}

console.log(chessboard());

// ### 7. Modify it to make any size grid.

// When you have a function that generates this pattern, modify it to take a parameter `size`. Make the function work for any size, outputting a properly formatted grid of the given width and height. If it helps you to have this set. The very first square should always be white.

// Remember to give it a nice **semantic** name

const chessboardOfAnySize = (size) => {
	let line1 = ' #';
	let line2 = '# ';
	let chessboard = '';
	for (let i = 0; i < size; i++) {
		if (i % 2 === 0 && size % 2 === 1) {
		  chessboard += `${line1.repeat(Math.floor(size / 2))} \n`;
		} else if (i % 2 === 0) {
			chessboard += `${line1.repeat(size / 2)}\n`;
		} else if (i % 2 === 1 && size % 2 === 1) {
			chessboard += `${line2.repeat(Math.floor(size / 2))}#\n`;
		} else if (i % 2 === 1) {
			chessboard += `${line2.repeat(size / 2)}\n`;
		}
	}
	return chessboard;
};

console.log(chessboardOfAnySize(4));
console.log(chessboardOfAnySize(8));
console.log(chessboardOfAnySize(10));
console.log(chessboardOfAnySize(11));

// 8. Variable number of arguments
// Modify calculate above so that it continues to work as specified in question 3, but also lets a user get the square root of a number by specifying only 2 parameters: the number they want the square root of as the first parameter, and “sqrt” as the second parameter.

const calculate2 = (operation, num1, num2 = 0) => {
	if (operation === 'add') return num1 + num2;
	if (operation === 'sub') return num1 - num2;
	if (operation === 'mult') return num1 * num2;
	if (operation === 'div') return num1 / num2;
	if (operation === 'exp') return num1 ** num2;
	if (operation === 'sqrt') return Math.sqrt(num1);
};

console.log(calculate2('sqrt', 25));