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

