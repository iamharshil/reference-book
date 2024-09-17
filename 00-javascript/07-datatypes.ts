/*
JavaScript types are dynamic so it's not required to set types of variables.

1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

// object datatype contain both built-in objects and user defined objects.
Built-in datatypes like:
    -> objects, arrays, dates, maps, sets, intarrays, floatarrays, promises and more.

*/

// Add all the methods of data types below it.

// String
const string = "'Hello, World'" || '\'Hello, World\''; // can use single quote in it
const stringSingleQuote = '"Hello, World"' || "\"Hello, World\""; // can use double quote in it
const stringTemplateLiteral = `"Joe's, World"` || `${name}'s, World`; // can use both along with dynamic variables

// Number
const number = 10;
const number2 = 10.10; // accept both number and decimal numbers.

// Boolean: Used in conditional testing.
const bool = true;

// Object
const obj = { firstName: "John", lastName: "Doe" };

// Array: indexes are zero-based (starts with zero)
const arr = ["Saab", "Volvo", "BMW"];

// Date
const date = new Date("2024-09-16");

// Javascript evaluates from left to right
const xString = 16 + 4 + "Volvo"; // 20Volvo

// BigInt: new data type in ES2020, it represent values that are too big for number.
const bigInt = BigInt("123456789012345678901234567890")

// typeof: find type of variables
console.log(typeof bigInt)


// Undefined: undefined has type of undefined too.
let undef: undefined;
undef = undefined;

// Function: block of code design to perform perticular task. variables created inside function are local and cannot be accessed outside of scope. can be used as variable i.e. compute and return something in template iterals.
function greet(name) {
  return `Hello, ${name}`;
}

const val = greet() // returns actual value -> hello, John,
const val1 = greet // return actual function || inherit function.

// Object: key, value pair. can have methods, use const for objects.
// define objects
// using Object literal, using the new keyword, using an Object Constructor function.

const obj1 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }; // object literal
const obj2 = new Object(); // new keyword
obj2.firstName = "john"
obj2.lastName = "Cena"

// these object are same as c's hash maps.
// everything in js is object like Objects, Maths, Functions, Dates, Arrays, Maps, Sets and all the value except primitives(string, number, bigint, boolean, undefined, symbol, null (datatype of null is primitive, it returns datatype of object and that is bug)) are objects.
// these primitive values are not changable. (general)
// js objects are mutable hence change in value of object declared with const is allowed but not re-assign.
// objects are containers for properties and methods.
// properties are named variables
// methods are functions stored as properties
// properties can be primitive values, functions or even another object.

// Object Properties:
// properties can be changed, added, deleted and some are read-only.
obj2['lastName'] = "Joe"
obj2['age'] = 24
delete obj2['age'] // delete can delete both property and object.

// Object methods: object methods are actions that can be performed on object.
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
person.fullName() // fullName method called.

// adding methods to object
person.name = function () {
  return `${this.firstName} ${this.lastName}`;
}

// change this in a way that it only has new or things I should remenber or know which I don't an this time.
// object iterate using for in loop.
// object.entries changes object key values into sub array in array.
console.log(Object.keys(person)) // 
console.log(Object.values(person))
console.log(Object.entries(person))


// Object Constructor function: sometimes we want to create many objects of the same types.
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eye = eye;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  }
}

const myFather = new Person("John", "Doe", 50, "blue")
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 17, "green");

// Adding properties to object
myFather.nationality = "English"
console.log(myFather)
Person.prototype.nationality = "Spanish";
console.log([myMother, mySister]);

