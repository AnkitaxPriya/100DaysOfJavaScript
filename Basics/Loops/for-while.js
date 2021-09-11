// for loop 
for(let index = 0; index < 10; index = index + 1) {
  console.log(index);
} // -> 0 1 2 3 4 5 6 7 8 9

// looping through an array 
let arr = ['abc', 'def', 'ghi'];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} // -> abc def ghi 

// infinite loop       
for(i = 0; true; i++) {
  console.log('This will print infinitely...');
} 

// ========== while loops ========== 
let i = 0;

while(i < 10) {
    console.log(i);
    i++;
} // -> 0 1 2 3 4 5 6 7 8 9 

// ========== for-in loop ========== 
let jon = {
  firstName: 'Jon',
  lastName: 'Smith',
  age: 34,
  profession: 'Developer',
  married: true
};

for(let key in jon) {
  console.log(key, ':', jon[key]);
} // -> firstName : Jon lastName : Smith age : 34 profession : Developer married : true