const number = 1242.0055;
// Ask for exactly 2 decimal points. Numbers will be rounded if necessary.
const fixedString = number.toFixed(2)
// fixedString = 1242.01

// Ask for 5 significant digits. Scientific notation is used if necessary.
const precisionString = number.toPrecision(5);
// console.log(precisionString); // precisionString = 1242.0

// Ask for scientific notation with 2 decimal plates.
const scientificString = number.toExponential(2);
// console.log(scientificString); // scientificString = 1.24e+3

// *TODO how to convert to a number to your local currency 
// const formatter = new Intl.NumberFormat('hi-IN', {style: 'currency', currency: 'INR'});

// const someAmount = 1242.0005;
// const moneyString = formatter.format(someAmount);
// console.log(moneyString);
//
// const formatter = new Intl.NumberFormat('hi-IN');
// const amount = 1000;
// const moneyString = amount.toLocaleString('hi-IN', {style: 'currency', currency: 'INR'});
// console.log(moneyString);


// *TODO print a emoji or non-English letters
const hamburger = '🍔';
const hamburgerStory = `I like hamburgers` + String.fromCodePoint(0x1F354);
console.log(hamburgerStory);
const hamburgerLength = hamburger.length;
console.log(hamburgerLength);

// *TODO performing a case-insensitive string comparison

//* use the toUpperCase method on both of the string
const a = 'HELLO';
const b = 'hello';

if (a.toLowerCase === b.toLowerCase){
    
}