/* Syntax: 
if(/*condition) {
  // conditional code
}
*/

let trueFlag1 = true;
let falseFlag1 = false;

if(trueFlag1) {
    console.log('This will print!');
}

if(falseFlag1) {
    console.log('This won\'t print :(');
}
// -> This will print!

/* else block:

if(/*condition) {
    // run this if condition is true
} else {
  // run this if condition is false
}
*/

let falseFlag = false;

if(falseFlag) {
    console.log("This won't print :(");
} else {
    console.log("We're in the else-block! This will print!");
}
// -> We're in the else-block! This will print!


// ========== Truthy and Falsey ==========
/* 
A value that coerces to true is referred to as “truthy”. One that coerces to false is “falsey”.

The following values are “falsey” and will coerce to false, meaning the code in the if-statement won’t run.

false
null
undefined
'' or "" (empty, 0-length string)
0 (the number zero)
NaN
All other values are truthy. This means that all numbers except 0 and NaN and all strings that are not empty are truthy.
*/
// Change 'true' in the next line to whatever you like.
let itemToTest = true;

if(itemToTest) {
    console.log(itemToTest + ' is truthy!');
} else {
    console.log(itemToTest + ' is falsey.');
} 
// -> true is truthy

// Another if-else example 
let flag1 = false;
let flag2 = false;
let flag3 = true;

if (flag1) console.log('This will not print.');
else if (flag2) console.log('This will not print either.');
else if (flag3) console.log('This will print!');