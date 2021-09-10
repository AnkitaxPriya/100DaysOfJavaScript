/*
A variable name must follow these rules:

- Variable names must begin with a letter, $, or _
- Variable names can contain letters, numbers, _, and $
- Variables are case sensitive - number is different from Number
- Reserved JavaScript keywords (such as let and var) cannot be used as variable names
*/

let x = 17;
let XYZ = 20;
let $ = 40; 
let _ = 88;
let $_$_$_ = 100;
let Ab90$___a789 = 119;

/* Types of Variables:
- Number
We can’t use commas, spaces, or other characters when we create numbers. We have to use continuous digits.

- String 
They’re created using the ' and " characters. 

--> String Characters 
Strings don’t have to be words. We can put any typeable keyboard character into a string. We can also put pretty much any text you can find on the internet into a string. Even emojis!

--> Escaping Characters 
We can escape to use the ' or " characters in our strings.
To escape a character, we put a backslash \ in front of it. The string will then be interpreted correctly.

- Boolean
Booleans contain 1 of 2 possible values: true or false.
*/

// ' and " both can be used while making a string
let string = 'Hello';
let string2 = "Hello";

// Any text can be put in a string 
let lettersAndNumbers = 'abcd1234';
let symbols = '!@#$%^&*()_+|}{';
let emojis = '😀 🦋 🐖 🌵 🍄 🌍 🌞';

console.log(lettersAndNumbers);
console.log(symbols);
console.log(emojis);

// Escaping characters
console.log('We\'re learning about escaping characters!');

// Use of booleans
let booleanTrue = true;
let booleanFalse = false;

// ========== Working with variables ==========
/* Printing :
To print something out, we use something called console.log()
*/

let bool = true;
let string = 'abc';

console.log('Hello!'); // -> Hello!
console.log(false); // -> false
console.log(bool); // -> true
console.log(string); // -> abc

/* Reassigning variables :
We can give a variable a new value if we like.
NOTE: We don’t use the let keyword again. We use it once the first time we create a variable and then we can reassign values without it.
*/

let variable = 'abc';
console.log(variable); // -> abc

variable = 25;
console.log(variable); // -> 25

variable = false;
console.log(variable); // -> false

// If we use let again, we’ll get an error.
let variable = 'abc';
console.log(variable);

let variable = 25; // -> Compilation Error
console.log(variable);

let variable = false;
console.log(variable);

/* Assigning Using Variables:
We can copy the value of a variable into another variable using =.
*/

let variable = 'abc';
let variableCopy = variable;
console.log(variableCopy); // -> abc

// NOTE: Once we copy a variable, the new variable is distinct from the old one. They have no relation to each other. If we change one, the other remains unchanged.

let variable = 'abc';
let variableCopy = variable;
variable = 'def';

console.log(variable); // -> def
console.log(variableCopy); // -> abc


// Q1: What is the Output?
let variable = 'abc';
let variableCopy = variable;
variableCopy = 'def';
variable = variableCopy;
console.log(variable); // -> def

// Q2: What is the Output?
let variable = 'abc';
let variableCopy = variable;
let variable = 'def';
console.log(variable);
// Error because we have use let again


// ========== More Variable Types in JS =========

/* Undefined: 
undefined is a special variable type used to indicate that something is missing. 

When we declare a variable using let but don’t give it a value, it receives the default value of undefined. This is JavaScript telling us that we’re trying to use something that isn’t there.
*/
let variable;
console.log(variable); // -> undefined

let variable = 'abc';
console.log(variable); // -> abc

variable = undefined;
console.log(variable); // -> undefined

/*Null: 
null is another variable type. It represents something that’s empty. The difference between null and undefined lies in they’re implemented by JavaScript and used by developers.

null is something that is safe to use and to assign to variables.
*/
let variable = null;
console.log(variable); // -> null

// NOTE: Preferring null over undefined is one of the best practices. Setting a variable to null is clear and communicates that we want to essentially delete the variable. We’re done with it.