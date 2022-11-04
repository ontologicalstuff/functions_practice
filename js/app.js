// 1. printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

const printGreeting = name => {return `Hello there, ${name}`}

console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// 2. reverseWordOrder
// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don’t worry about punctuation.

// console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"

// console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"

const reverseWordOrder = wordString => {
    let reverseWordArr = wordString.split(' ');
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

// This function should take three arguments: two numbers and a string.

// Name the parameters num1, num2, and operation.

// If if the function is called with the third argument as “add”, it should return the sum of num1 and num2.

// If if the function is called with the third argument as “sub”, it should return return num1 minus num2.

// Do the same thing for multiplication “mult”, division “div”, and exponent “exp” (where num2 is the exponent of num1).



const calculate = (num1, num2, string) => {
    if (string === 'add') return num1 + num2;
    if (string === 'sub') return num1 - num2;
    if (string === 'mult') return num1 * num2;
    if (string === 'div') return num1 / num2;
    if (string === 'exp') return num1 ** num2;
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
	nums = nums.toString().split('');
	const newArr = Array.from(new Set(nums));
	return newArr.length === nums.length;
}

console.log(checkIfPandigital(15234)); // true
console.log(checkIfPandigital(333)); // false
console.log(checkIfPandigital(0)); // false
console.log(checkIfPandigital(987654321)); // true

