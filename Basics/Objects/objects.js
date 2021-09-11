/*Objects are another way to store a collection of values. While arrays keep everything ordered, objects provide a little more flexibility.*/

/* KEY VALUE
An object is created with curly brackets {}. They’re made up of key-value pairs, also referred to as properties. 
*/
let obj = {
  key: 'value'
};

console.log(obj); // -> { key: 'value' }

let jon = {
  firstName: 'Jon',
  lastName: 'Smith',
  age: 34,
  profession: 'Developer',
  married: true
};

console.log(jon); // ->
/* 
{ firstName: 'Jon',
lastName: 'Smith',
age: 34,
profession: 'Developer',
married: true }
*/

/* BRACKET NOTATION []
To access an object’s property, we use brackets, like we would for an array.*/
let john = {
  firstName: 'Jon',
  lastName: 'Smith',
  age: 34,
  profession: 'Developer',
  married: true
};

console.log(john['firstName']); // -> Jon
console.log(john['age']); // -> 34

let jon = {
  firstName: 'Jon',
  lastName: 'Smith',
  age: 34,
  profession: 'Developer',
  married: true
};

let propName = 'firstName';
console.log(jon[propName]); // -> Jon

/* DOT NOTATION
If the property names are valid JavaScript variable names, we can use dot notation instead. It saves us a few characters. All properties on jon are valid JavaScript variable names so we can access them completely with dot notation.*/
let jon1 = {
  firstName: 'Jon',
  lastName: 'Smith',
  age: 34,
  profession: 'Developer',
  married: true
};

console.log(jon1.firstName); // -> Jon
console.log(jon1.age); // -> 34

// Adding properties 
let jon2 = {
  firstName: 'Jon',
  lastName: 'Smith',
  age: 34,
  profession: 'Developer',
  married: true
};

jon2.fullName = jon2.firstName + jon2.lastName;
jon2['hasChildren'] = true;

console.log(jon2); // ->
/*
{ firstName: 'Jon',
lastName: 'Smith',
age: 34,
profession: 'Developer',
married: true,
fullName: 'JonSmith',
hasChildren: true }
*/

let jon3 = {
  firstName: 'Jon',
  lastName: 'Smith',
  otherInformation: {
      age: 34,
      profession: 'Developer',
      married: true
  },
  children: ['Anna', 'Jake']
};

console.log(jon3.otherInformation.profession); // -> Developer
console.log(jon3.children[0]); // -> Anna

/*undefined:
If we attempt to look up a property that doesn’t exist, we’ll get undefined.*/
let obj = {};
console.log(obj.xyz); // -> undefined
