// We can perform math with JavaScript. Addition, subtraction, multiplication, and division are simple.
// These operators follow the standard order of operations.

let num1 = 10;
let num2 = 5;

console.log(num1 + num2); // -> 15
console.log(num1 - num2); // -> 5
console.log(num1 / num2); // -> 2
console.log(num1 * num2); // -> 50

// We can assign the result of mathematical operations to new variables.

let num1 = 10;
let num2 = 5;

let addition = num1 + num2;
let subtraction = num1 - num2;
let division = num1 / num2;
let multiplication = num1 * num2;

console.log(addition);       // -> 15
console.log(subtraction);    // -> 5
console.log(division);       // -> 2
console.log(multiplication); // -> 50

// Modulus Opertor 
console.log(5 % 1); // -> 0
console.log(5 % 2); // -> 1
console.log(5 % 3); // -> 2
console.log(5 % 4); // -> 1


// ========== Using Operators with Different Types ==========

// String addition just joins the strings together into a new, larger string.
let string1 = 'Hello ';
let string2 = 'there!';
console.log(string1 + string2); // -> Hello there!

/* When we use operators (other than +) with other data tyoes, we get a new value: NaN.
NaN is technically a number type variable, but it stands for Not-a-Number. It’s meant to show us that we messed up our math and attempted to perform some nonsensical operation.
*/
let string1 = 'Hello ';
let string2 = 'there!';

console.log(string1 - string2); // -> NaN
console.log(string1 * string2); // -> NaN
console.log(string1 / string2); // -> NaN
console.log(string1 % string2); // -> NaN

/* Type Coercion:
When we to use different types in an operation, JavaScript will do its best to get us a real value. It will try to get us something that is not NaN. If it thinks it can safely convert something to another type and then perform its operation, it’ll do so. This is called type coercion.
*/
console.log(undefined - null); // -> NaN
console.log('abc' * undefined); // -> NaN
console.log(9 % null); // -> NaN
console.log(null + 4); // -> 4 ; type coercion observed -> In this case, JS converts null to 0. Then it adds 0 and 4.

// More cases of type coercion 
console.log(null - 7);     // -> -7
console.log('abc' + null); // -> abcnull
console.log(20 + 'abc');   // -> 20abc
console.log(9 + true);     // -> 10
/*Here are the conversions in each of the lines above.

null -> 0 (null -> number)
null -> 'null' (null -> string)
20 -> '20' (number -> string)
true -> 1 (boolean -> number) */

// Q3. Predict the output of 
let str = 'Hello';
let bool = 0;
console.log(str - bool); // -> NaN

// Q4. Predict the output of 
let bool = true;
let num = 0;
console.log(bool - num); // -> 1

// Q5. Predict the output of 
let num1 = 2;
let num2 = 5;
console.log(num2 % num1); // -> 1

// Q6. Predict the output of 
let str1 = 'Hello';
let str2 = 'there!';
console.log(str1 + str2); // -> Hellothere!