/* STEP 1: Number types (integer, float, and double)
       declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
let myInt = 42; // integer
let myFloat = 42.25412; // float
let myDouble = 42.254123456789; // double
let myBinary = 0O101010; // binary
let myOctal = 0b101010; // octal
let myHex = 0x2A; // hexadecimal
// Note - there are also different number systems: binary, octal, and hexadecimal

/* STEP 2: Arithmetic operators
+ (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */
let step2a= 5**2
console.log(step2a);

// Try declaring and initializing a couple of variables as numbers
let num1 = 5;
let num2 = 10;
let step2b = num1 + num2 * num1;
console.log(`the value of step2b is ${step2b}`);

/* OR… num1 * num2 / 8 + 2 - 0.5; */

/* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */

/* If you want to avoid this precedence, use parenthesis
(num1 + num2) * 5 - 25 */

/* STEP 3: Increment and decrement operators
++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
//explain ++step3 vs step3++
let step3 = 5;
console.log(step3); // 5
step3++; // increment
console.log(step3); // 6
// step3++; first shows then increments whereas ++step3 increments then shows

// Note 1 - you cannot increment/decrement a number directly
// Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrementing - try ++num or --num, instead

/* STEP 4: Assignment Operators
= (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */


/* STEP 5: Comparison Operators
===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */

let myNum = 17
myNum++
console.log(myNum)