function myFirstFunction() {
  console.log('Just ran my first function!');
}

myFirstFunction(); // -> Just ran my first function!

/*Function Arguments:
In the following code, `someValue` is called an argument to the function. Another word for argument is parameter.
*/

// Example 1:
function printValue(someValue) {
  console.log('The item I was given is: ' + someValue);
}

printValue('abc'); // -> The item I was given is: abc

// Example 2:
function printValue1(someValue1) {
  console.log('The item I was given is: ' + someValue1);
}

let variable = 17;
printValue1(variable); // -> The item I was given is: 17

// Example 3:
function print1(someValue) {
  console.log('The item I was given is: ' + someValue);
}

function print2(arg) {
  console.log('The item I was given is: ' + arg);
}

function print3(xxx) {
  console.log('The item I was given is: ' + xxx);
}

let variable = 20;

print1(variable); // -> The item I was given is: 20
print2(variable); // -> The item I was given is: 20
print3(variable); // -> The item I was given is: 20

// Multiple Arguments 
function printValues(value1, value2) {
  console.log(value1 + ', ' + value2);
}

printValues('abc', 123); // -> abc, 123

/*undefined arguments:
If we don’t pass in an argument to a function, it receives the value of undefined when the function runs. This follows the guideline spelled out in an earlier lesson. undefined is meant to symbolize something missing. In this case, it shows a missing argument.
*/
function printValues(value1, value2, value3) {
  console.log(value1 + ', ' + value2 + ', ' + value3);
}

printValues('abc', 123, true); // -> abc, 123, true
printValues('abc', 123); // -> abc, 123, undefined
printValues('abc'); // -> abc, undefined, undefined
printValues(); // -> undefined, undefined, undefined

/* ========== Local Variables ==========
Any variable created inside a function is local to that function. This includes all variables created with let and argument variables.
*/
function printValue3(value) {
  let stringToPrint = 'The value I was given is: ' + value;
  console.log(stringToPrint);
}

printValue3(10); // -> The value I was given is: 10
console.log(stringToPrint); // -> error

// A function can, however, use variables that were declared outside the function.
function printValue4(value) {
  console.log(startString + value);
}

let startString = 'The value I was given is: ';
printValue4(10); // -> The value I was given is: 10

/* NOTE: Every time we run console.log(), we invoke a function and the item we provide is its argument.

console.log can actually accept multiple arguments. It can take in as many as we provide.*/

console.log(1, 2, true, 'abc', 17);
// -> 1 2 true 'abc' 17


/* ========== Return Statements ========== 
In addition to accepting values in through arguments, a function can send something back out.*/
function add10(number) {
  let newNumber = number + 10;
  return newNumber;
}

let fifteen = add10(5);
console.log(fifteen); // -> 15

function add(num1, num2) {
  return num1 + num2;
}

let twenty = add(5, 15);
console.log(twenty); // -> 20

/* ========== Returning undefined ========== 
If we use a return statement without returning a value, the function will automatically return undefined.
*/
function add(num1, num2) {
  let newNumber = num1 + num2;
  return;
}

let twenty = add(5, 15);
console.log(twenty); // -> undefined

/* Stopping a Function:
If a function sees a return statement, it will stop executing. It’ll just quit.*/
function print() {
  console.log('This will print!');
  return;
  console.log('This will not print :(');
}

print(); // -> This will print!