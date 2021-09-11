/* 
Arrays can be thought of as containers. They contain multiple other variables inside them in an ordered way. They’re created with the [] characters.
*/
let array = []; //empty array
console.log(array); // -> []

let array = [10, 'abc', false, 25, 'Hi!'];
console.log(array); // -> [ 10, 'abc', false, 25, 'Hi!' ]

// accessing items
let array = [ 10, 'abc', false, 25, 'Hi!'];
// indexes:   0     1      2    3    4

console.log(array[0]); // -> 10
console.log(array[1]); // -> abc
console.log(array[2]); // -> false
console.log(array[3]); // -> 25
console.log(array[4]); // -> Hi!

// length of array 
let array = [10, 'abc', false, 25, 'Hi!'];
console.log(array.length); // -> 5
/*NOTE:  We can see that the length is always 1 greater than the last index. In other words, the last item in an array is always at index array.length - 1. This means that to get the last item, we can write array[array.length - 1].
*/

// changing item: using = 
let array = ['a', 'b', 'c'];
console.log(array); // -> ['a', 'b', 'c']

array[0] = 0;
console.log(array); // -> [0, 'b', 'c']

array[1] = 1;
console.log(array); // -> [0, 1, 'c']

array[2] = 2;
console.log(array); // -> [0, 1, 2]

//add items
let array = ['a', 'b', 'c'];
array[3] = 3;
console.log(array); // -> ['a', 'b', 'c', 3]

// ========== ARRAY METHODS ========== 
/* Array.push:
We can add items to the end of an array using Array.push. 
It’s used like console.log is used. 
To use this function, we use the array we want to add an item to. We add a .push() after the variable name and pass in whatever we like to the function. The argument will be added to the end of that array.

We can push multiple items at once. We just pass in more arguments to the push function.*/
let arr = ['abc', 'def'];
console.log(arr); // -> [ 'abc', 'def' ]

arr.push('ghi');
console.log(arr); // -> [ 'abc', 'def', 'ghi' ]

arr.push('xyz', 'jkl');
console.log(arr); // -> [ 'abc', 'def', 'xyz', 'jkl' ]

/* Array.pop:
It removes the last item from an array and returns it. It takes no arguments.
*/
let arr1 = ['abc', 'def', 'ghi'];
let lastItem = arr1.pop();

console.log(lastItem); // -> ghi
console.log(arr1); // -> [ 'abc', 'def' ]

/*Array.shift:
Array.shift is like pop, except it removes from the beginning of an array. */
let arr2 = ['abc', 'def', 'ghi'];
let firstItem = arr2.shift();

console.log(firstItem); // -> abc
console.log(arr2); // -> [ 'def', 'ghi' ]

/*Array.unshift:
This is like push, but adds to the beginning of an array. Again, it can take multiple arguments.*/
let arr3 = ['abc', 'def'];
arr3.unshift('ghi', 'jkl');
console.log(arr3); // -> [ 'ghi', 'jkl', 'abc', 'def' ]