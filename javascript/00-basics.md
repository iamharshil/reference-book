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
document.write("Hello World!"); // remove all existing HTML

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

```javascript
const obj = { name: "John" };
obj.name = "Doe"; // works

const arr = [1, 2, 3];
arr.push(4); // works
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

```javascript
const number = 10;
const number2 = 10.1; // supports decimal numbers
```

### Boolean

```javascript
const bool = true;
```

### Undefined

```javascript
let a; // undefined
```

### Null

```javascript
const [data, setData] = useState(null);
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

```javascript
const obj = { name: "John", age: 30 };

//  Javascript object has properties and methods
const obj1 = {
  firstName: "John", // property
  lastName: "Doe", // property
  // Method
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
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
function greet(name) {
  return `Hello, ${name}`;
}
// arrow function does not have its own this, arguments, super, or new.target
```

## Operators

### Assignment Operator

```javascript
const a = 10;
```

### Arithmetic Operators

```javascript
const c = a + b;
const d = a - b;
const e = a * b;
const f = a / b;
```

### Comparison operator

```javascript
const c = a > b;
const d = a < b;
const e = a >= b;
const f = a <= b;
const g = a === b;
const h = a !== b;
```

### String operator

```javascript
const a = "Hello";
const b = "World";
const c = a + b; // all the comparison operators can be used with string
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
