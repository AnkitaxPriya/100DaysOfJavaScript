/* NOT operator (!):
The ! operator is called the “not”-operator. It does two things to a value: it coerces it to either true or false, and then gives the opposite value. Falsey values become true and truthy values become false.
*/
// Falsey values become true
console.log(!false);      // -> true
console.log(!'');         // -> true
console.log(!0);          // -> true
console.log(!null);       // -> true
console.log(!undefined);  // -> true
console.log(!NaN);        // -> true

// Truthy values become false
console.log(!true);      // -> false
console.log(!1);         // -> false
console.log(!'abc');     // -> false
console.log(!9999999);   // -> false
console.log(!'ha*UIHJ'); // -> false

// ! in if-else 
let falseyValue = false;

if(!falseyValue) {
    console.log('This will run!');
} else {
    console.log('This will not run :(');
}
// -> This will run!

/* OR operator (||): 
To use ||, we put an item on the left of it and another on the right. It follows these rules:

If both items are truthy, the whole thing will be truthy.
If one is truthy and the other is falsey, the whole thing will be truthy.
If both items are falsey, the whole thing will be falsey.
*/

let firstItem = true;
let secondItem = false;

if(firstItem || secondItem) {
    console.log('One or both of the items is truthy!');
} else {
    console.log('Neither of the items is truthy.');
}
// -> One or both of the items is truthy!

/* AND operator: (&&)
It follows these rules:

If both items are truthy, the whole thing will be truthy.
If one is truthy and the other is falsey, the whole thing will be falsey.
If both items are falsey, the whole thing will be falsey.
*/

let firstItem1 = true;
let secondItem1 = false;

if(firstItem1 && secondItem1) {
    console.log('Both of the items are truthy!');
} else {
    console.log('One or both of the items is falsey.');
}
// -> One or both of the items is falsey.

// Combining Operators
let firstItem = true;
let secondItem = false;

if(!firstItem && !secondItem) {
    console.log('Both of the items are falsey!');
} else {
    console.log('One or both of these items is truthy.');
} // -> One or both of these items is truthy.

/* Order of Operators: 
1. !
2. && 
3. ||

!a || b && c
is evaluated like: 
(!a) || (b && c)
*/

// Q1. Predict the output of 
if ('abc' && '0') {
  console.log('A');
} else {
  console.log('B');
} // -> A

// Q2. Predict the output of 
if (!!'abc' && !0) {
  console.log('A');
} else {
  console.log('B');
} // -> A 

// ========== Comparison Operators ==========
if(10 > 5) {
  console.log('Condition is true!');
} else {
  console.log('Condition is false.');
} // -> Condition is true!

if(10 < 5) {
  console.log('Condition is true!');
} else {
  console.log('Condition is false.');
} // -> Condition is false.

if(10 >= 5) {
  console.log('Condition is true!');
} else {
  console.log('Condition is false.');
}

if(5 >= 5) {
  console.log('Condition is true!');
} else {
  console.log('Condition is false.');
} // -> Condition is true! Condition is true!

if(5 <= 10) {
  console.log('Condition is true!');
} else {
  console.log('Condition is false.');
}

if(5 <= 5) {
  console.log('Condition is true!');
} else {
  console.log('Condition is false.');
} // -> Condition is true! Condition is true!

// The triple equal (===): This operator checks if two items are the same. It results in true if the items are identical and false if not.
console.log(4 === 4);         // -> true
console.log('abc' === 'abc'); // -> true
console.log(false === false); // -> true
console.log(17 === '17');     // -> false

/* The double equal (==): 
The double-equal is similar. It will do the same thing as the triple equal, but has an extra “feature”.

If we try to compare two values of different types (for example, a number and a string), the double-equal will attept to coerce the values to be the same type. One or both values may be coerced.

After it attempts coercion, it will return true or false.
*/
console.log(4 == '4'); // -> true
console.log(true == 1); // -> true
console.log(false == 0); // -> true
console.log('' == false); // -> true

// NOTE: it’s a common best practice to always use the triple-equal. Using a double-equal when we want to check two values can lead to unexpected results due to coercion. With triple-equal, we don’t have to worry about it.

/* 
Where == returns true, != returns false
Where == returns false, != returns true
Where === returns true, !== returns false
Where === returns false, !== returns true
Again, we should always use !== over !=. These are used in if-statements frequently.
*/