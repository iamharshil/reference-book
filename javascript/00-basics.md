# Javascript basics

## Table of Contents

- [Origin](#origin)
- [Dom Manipulation](#dom-manipulation)
- [Display Content in JavaScript](#display-content-in-javascript)
- [Variables](#variables)
- [Hoisting](#hoisting)
- [Data Types](#data-types)
- [Operators](#operators)

## Origin

- Created by Brendan Eich in 1995
- Standardized by ECMA International in 1997
- First ES (ECMAScript) version ES1, ES2, ES3 (1997-1999)
- First Main Revision ES5 (2009)
- Second Main Revision ES6 (2015)
- Current version is ES14 (ECMAScript 2023)

## Dom Manipulation

```javascript
// Select an element by id
const menuElement = document.getElementById("menu");

// Change style of an element
document.getElementById("menu").style.display = "none";

// Change content of an element
document.getElementById("test").innerHTML = "Hello World!";
```

## Display Content in JavaScript

```javascript
// 1. innerHTML
document.getElementById("demo").innerHTML = "Hello World!";

// 2. document.write
document.write("Hello World!"); // remove all existing HTML when called

// 3. window.alert
window.alert("Hello World!"); // or alert("Hello World!");

// 4. console
console.log("Hello World!");
console.warn("Hello World!");
console.error("Hello World!");
```

## Variables

- `var`, `let`, `const`
- `var` has global scope while `let` and `const` have block scope
- `const` is mutable for non-primitive data types
- While using `const` must assign a value when declaring variable.

```javascript
const obj = { name: "John" };
obj.name = "Doe"; // works

const arr = [1, 2, 3];
arr.push(4); // works

const PI; // Error: Missing initializer in const declaration
PI = 3.14159265359;
```

## Hoisting

- Hoisting is concept of moving variables to the top of the file.
- `var` is hoisted at the top of the file
- `let` and `const` are hoisted at the top of the block

```javascript
console.log(a); // undefined (hoisted)

var a = 10; // doesn't throw error because of hoisting.

function () {
    console.log(b); // Error: Cannot access 'b' before initialization (hoisted)

    let b = 20;
}
```

## Data Types

- Primitive data types: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`
- Non-primitive data types: `objects`, `arrays`, `dates`, `maps`, `sets`, `promises` and more.

- All the primitive data types are immutable(not changeable) and non-primitive are mutable(changeable).

### Strings

```javascript
const str = "Hello World!";

str.length; // 12: get length of string
str.chatAt(0); // H: get character at index 0
str.charCodeAt(0); // 72: get unicode of character at index 0
str.toUpperCase(); // HELLO WORLD!: convert to uppercase
str.toLowerCase(); // hello world!: convert to lowercase
str.slice(0, 5); // Hello: (startIndex, endIndex)
str.substring(-2); // Hello: converts negative index to 0
str.substr(0, 5); // Hello: start index and length
str.concat(" ", "World!"); // Hello World!: join two strings
```

### Number

- Javascript number is always `double (64-bit floating point)`
- Exponential notation: `1e3` is equivalent to `1000`
- Extra large or extra small numbers can be written using scientific (exponential) notation.

```javascript
const number = 10;
const number2 = 10.1; // supports decimal numbers
const number3 = 123e5; // 12300000
const number4 = 123e-5; // 0.00123
```

### Boolean

```javascript
const bool = true;
```

### Undefined

```javascript
let a; // undefined
let car = undefined; // undefined
car = ""; // string
```

### Null

```javascript
const [data, setData] = useState(null);

// null is an object
typeof null; // object
```

### Symbol

```javascript
const sym = Symbol("Hello");
```

### BigInt

```javascript
const bigInt = 1234567890123456789012345678901234567890n;
const bigInt = BigInt(1234567890123456789012345678901234567890n);
```

### Object

- Object in javascript is same as hashmap in java and hash tables in c.
- Built-in javascript constructors:

  1. `new Object() // object object` - object literal `{}`
  2. `new Array() // array object` - array literal `[]`
  3. `new Date() // date object` - date literal `new Date()`
  4. `new Map() // map object` - map literal `new Map()`
  5. `new Set() // set object` - set literal `new Set()`
  6. `new Date() // date object` - date literal `new Date()`
  7. `new RegExp() // regular expression object` - regular expression literal `/()/`
  8. `new Function() // function object` - function literal `function() {}`
  9. `new Promise() // promise object` - promise literal `new Promise()`

  - Math object is a global object and does not have a constructor(new keyword).

```javascript
// It's better to declare object using const.
const car = new Object();

//  Object has properties and methods
// properties
car.name = "Ford";
car.model = 500;

// methods
car.start = function () {
  return "Car started";
};
car.drive = function () {
  return "Car driving";
};

car["name"]; // or
car.name; // access property

car.color = "red"; // add new property

delete car.color; // or
delete car["color"]; // delete property
delete car; // delete object

// Nested object
const car = {
  name: "Ford",
  color: {
    exterior: "red",
    interior: "black",
  },
};
car.color.exterior; // red

car.drive(); // accessing/invoking object method
car["drive"](); // accessing/invoking object method

// adding/updating method
car.drive = function () {
  return "Car driving fast";
};

// display properties using for-in loop
for (let key in car) {
  console.log(key, car[key]);
}

Object.values(car); // returns array of values
Object.keys(car); // returns array of keys
Object.entries(car); // returns array of key-value pairs inside an array
JSON.stringify(car); // convert object to string

// Object constructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  // Object constructor method
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
const myFather = new Person("John", "Doe", 50, "blue");
const mySelf = new Person("Jane", "Doe", 20, "brown");

myFather.age; // adding age to myFather object does't change Person object.

// Cannot add new method to object constructor
Person.changeAge = function (age) {
  this.age = age;
};
// To add new method to object constructor use prototype
Person.prototype.changeAge = function (age) {
  this.age = age;
};
```

### Array

```javascript
const arr = ["John", "Doe"];
```

### Date

```javascript
const date = new Date();
```

### Maps

```javascript
const map = new Map();
```

### Sets

```javascript
const set = new Set();
```

### Promises

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});
```

### Functions

```javascript
// arrow function does not have its own this, arguments, super, or new.target
const greet = (name) => {
  let a = this; // window object
  return `Hello, ${name}`;
};

function greet(name) {
  return `Hello, ${name}`;
}

// Function as a variable
const greetings = greet("John"); // Hello, John

const a = greet; // function without invoking returns [Function: greet] and typeof function

// Variable defined using `let` or `const` has block scope and cannot be accessed outside the block
function greet() {
  if (true) {
    let a = 10;
  }
  console.log(a); // Error: a is not defined
}

// Function defined using arrow function does not support `this` keyword
const car {
  name: "Ford",
  model: 500,
  drive: () => {
    // this keyword will refer to the window object
    return `Driving my ${this.name} car`; // Driving my undefined car
  }
}
```

## Operators

### Assignment Operator

```javascript
let a = 10;
a += 10;
a -= 10;
a *= 10;
a /= 10;
a %= 10;
a **= 10;
```

### Arithmetic Operators

```javascript
const c = a + b;
const d = a - b;
const e = a * b;
const f = a ** b;
const g = a / b;
const h = a % b;
const i = a++;
const j = a--;
```

### Comparison operator

```javascript
const c = a > b;
const d = a < b;
const e = a >= b;
const f = a <= b;
const g = a === b; // check both value and data type
const h = a == b; // check only value
const i = a !== b; // check both value and data type
const j = a != b; // check only value
```

### String operator

```javascript
const a = "Hello";
const b = "World";
const c = a + b; // all the comparison operators can be used with string

const d = "20";
const e = "5";
d < e; // true

let text1 = "What a very ";
text1 += "nice day";

let a = 5 + 5; // 10
let b = "5" + 5; // 55 (string) if any value is string then it will be concatenated instead of addition
let c = "Hello" + 5; // Hello5
let d = 5 + +"5"; // 10 (number) adding + sign before string will convert it to number
```

### Logical operators

```javascript
const a = true;
const b = false;
const c = a && b;
const d = a || b;
const e = !a;
```

### Type operators

```javascript
const a = typeof a;
const b = a instanceof Number;
```

### Bitwise operators

```javascript
const a = 10;
const b = 20;
const c = a & b;
const d = a | b;
```

### Ternary Operator

```javascript
const a = 10;
const b = 20;
const c = a > b ? "a is greater than b" : "b is greater than a";
```
