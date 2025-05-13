/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */
let myName;
let myAge;

/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = "Arash";
myAge = 23;

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
numCars = 5;
// STEP 4: Variable types (use typeof in the console)
// Numbers

// Strings (use '' or "")
manufacturer = `McLaren`;
carYear = 2023;

console.log(`My ${manufacturer} was made in ${carYear}.`);
// Booleans
let isFast = true;
// Arrays
let myCarsArray = ['McLaren', 'Ferrari', 'Lamborghini'];
let mixedArray = ['McLaren', true, 23];
console.log(myCarsArray[1])
// Objects
let myDog = {
    name: 'Valter',
    Bread: 'Rottweiler',
    age: 3,
    isGoodBoy: true,
};
console.log(myDog.name)
// STEP 5: Typing (JavaScript is a loosely-typed language)

