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

## Important and Conventions

- Comparing two objects always return false.

```javascript
const obj1 = { name: "John" };
const obj2 = { name: "John" };

obj1 === obj2; // false

const bool1 = new Boolean(true);
const bool2 = new Boolean(true);

bool1 === bool2; // false
```

- Do not use for in over array if the index order is important.
- The index order implementation-dependent, and array values may not be accessed in the order you expect.
- Use for loop, for of loop or Array.forEach() when order is important.

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

### Types of Data

<!-- prettier-ignore-start -->
```javascript
typeof "John"          // Returns "string"
typeof ("John"+"Doe")  // Returns "string"
typeof 3.14            // Returns "number"
typeof (33 + 66)       // Returns "number"
typeof NaN             // Returns "number"
typeof 1234n           // Returns "bigint"
typeof true            // Returns "boolean"
typeof false           // Returns "boolean"
typeof {name:'John'}   // Returns "object"
typeof [1,2,3,4]       // Returns "object"
typeof {}              // Returns "object"
typeof []              // Returns "object"
typeof new Object()    // Returns "object"
typeof new Array()     // Returns "object"
typeof new Date()      // Returns "object"
typeof new Set()       // Returns "object"
typeof new Map()       // Returns "object"
typeof function () {}  // Returns "function"
typeof x               // Returns "undefined"
typeof null            // Returns "object"

```
<!-- prettier-ignore-end -->

### Strings

```javascript
const str = "Hello World!";

// string as an object
const str = new String("Hello World!"); // typeof object

str.length; // 12: get length of string
str.at(-1); // !: get character at index -1 (allow negative index)
str.chatAt(0); // H: get character at index 0 (does not allow negative index)
str.charCodeAt(0); // 72: get unicode of character at index 0
str.toUpperCase(); // HELLO WORLD!: convert to uppercase
str.toLowerCase(); // hello world!: convert to lowercase
str.slice(0, 5); // Hello: (startIndex, endIndex)
str.substring(-2); // Hello: converts negative index to 0
str.substr(0, 5); // Hello: start index and length
str.concat(" ", "World!"); // Hello World!: join two strings
str.trim(); // Hello World!: remove whitespace from both ends
str.trimStart(); // Hello World!: remove whitespace from start
str.trimEnd(); // Hello World!: remove whitespace from end
str.padStart(20, "*"); // ********Hello World!: add padding at start
str.padEnd(20, "*"); // Hello World!********: add padding at end
str.repeat(2); // Hello World!Hello World!: repeat string
str.replace("World", "Universe"); // Hello Universe!: replace string // replaces only first occurrence // case-sensitive
str.replace(/World/g, "Universe"); // Hello Universe!: replace all occurrences // case-sensitive
str.replaceAll("World", "Universe"); // Hello Universe!: replace all occurrences // case-sensitive
str.split(" "); // ["Hello", "World!"]: split string into array

str.includes("World"); // true: check if string contains substring
str.includes("World", 7); // start search from index 7

str.startsWith("Hello"); // true: check if string starts with substring
str.startsWith("Hello", 0); // start search from index 0

str.endsWith("World!"); // true: check if string ends with substring
str.endsWith("World!", 12); // start search from index 12

// string search methods
str.indexOf("World"); // 6: get index of first occurrence // -1 if not found
str.lastIndexOf("World"); // 6: get index of last occurrence // -1 if not found
str.indexOf("World", 7); // start search from index 7
str.lastIndexOf("World", 7); // start search from index 7
str.search("World"); // 6: get index of first occurrence, accept regex // does not accept second argument
str.search(/World/i); // 6: case-insensitive search
str.match("World"); // ["World"]: get matched string array with a
str.match(/World/g); // ["World"]: get all matched strings in an array
str.match(/World/gi); // ["World"]: case-insensitive search
str.matchAll(/World/gi); // iterator object with all matched strings

const str = "Test, Test, Test";
str.match(/Test/g); // ["Test", "Test", "Test"]

const matchAllStr = str.matchAll(/Test/g);
for (const match of matchAllStr) {
  console.log(match); // ["Test", index: 0, input: "Test, Test, Test", groups: undefined]
}
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

isNaN(number); // false: check if value is NaN
typeof NaN; // number: NaN is a number
let x = 2 / 0; // Infinity
let y = -2 / 0; // -Infinity
typeof Infinity; // number: Infinity is a number

number.toString(); // "10": convert number to string (base 10)
number.toString(2); // "1010": convert number to string (base 2)
number.toString(8); // "12": convert number to string (base 8)
number.toString(16); // "a": convert number to string (base 16)
number.toString(32); // "a": convert number to string (base 32)

const number = new Number(10); // typeof object, use when need to use number as an object
new Number(10) === new Number(10); // false: object comparison

Number.isInteger(10); // true: check if number is integer
Number.IsSafeInteger(10); // true: check if number is safe integer

number.toString(); // "10": convert number to string

number.toExponential(); // "1e+1": convert number to exponential notation
number.toExponential(4); // "1.0000e+1": convert number to exponential notation with 4 decimal places

number.toFixed(2); // "10.00": convert number to fixed-point notation with 2 decimal places

number.toPrecision(); // "10": convert number to precision notation

const number = 8.656;
number.toPrecision(); // "8.656": convert number to precision notation
number.toPrecision(2); // "8.7": convert number to precision notation with 2 significant digits

number.valueOf(); // 10: return primitive value of number

// Convert variables to numbers
Number("10"); // 10
Number(true); // 1
Number("John"); // NaN
Number(new Date("2021-01-01")); // 1609459200000
parseInt("10"); // 10
parseInt("10 years"); // 10
parseInt("years 10"); // NaN
parseInt("10.5"); // 10
parseFloat("10.5"); // 10.5
parseFloat("10.5 years"); // 10.5
parseFloat("years 10.5"); // NaN
```

### Boolean

```javascript
const bool = true;

Boolean(0); // false
Boolean(10 > 9); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean(10 / undefined); // false

let bool = new Boolean(false); // typeof object
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

// BigInt is not a number
// BigInt cannot have decimal points
// BigInt cannot be used with Math object
5n / 2; // Error: Cannot mix BigInt and other types, use explicit conversions
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

// destructuring object
const person = { name: "John", age: 30, city: "New York" };
const { name, age, city } = person;
```

### Array

```javascript
const arr = ["Saab", "Volvo", "BMW"];
typeof arr; // object

car[1]; // Volvo
new Array(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
arr[0] = "Toyota"; // change element

// loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
arr.forEach((item) => console.log(item));

arr.push("Audi"); // add element at the end
arr[8] = "Mercedes"; // add element at index 8 (empty elements will be undefined)

// recognized as array
Array.isArray(arr); // true
arr instanceof Array; // true

const arr = ["Banana", "Orange", "Apple", "Mango"];

arr.length; // 4 (length of array)
arr.at(-1); // Mango (get element at index -1)
arr.toString(); // Banana,Orange,Apple,Mango (convert array to string)
arr.pop(); // remove last element
arr.push("Kiwi"); // add element at the end
arr.shift(); // remove first element
arr.unshift("Apple"); // add element at the beginning
delete arr[0]; // remove element at index 0 (empty elements will be undefined and deleted index turns to undefined) // not recommended
arr.concat(["strawberry", "blueberry"]); // merge two arrays
arr.concat(["Apple", "Banana"], ["Cherry", "Date"]); // merge multiple arrays
arr.concat("Apple", "Banana"); // merge array with elements
arr.copyWithin(2, 0); // ["Apple", "Mango", "Apple", "Mango"] (copy elements from index 0 to 2)
arr.copyWithin(2, 0, 2); // ["Apple", "Mango", "Apple", "Mango"] (copy elements from index 0 to 2), overwrites existing values

const arr = [
  ["Banana", "Orange"],
  ["Apple", "Mango"],
];
arr.flat(); // ["Banana", "Orange", "Apple", "Mango"] (flatten array)

const myArr = [1, 2, 3, 4, 5, 6];
arr.flatMap((x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10, 6, 12] (map and flatten array)

arr.splice(2, 0, "Lemon", "Kiwi"); // add elements at index 2
arr.splice(2, 2, "Lemon", "Kiwi"); // remove 2 elements and add 2 elements at index 2

// Array splice method
// old method
arr.splice(0, 1); // remove 1 element at index 0, changes original array
// new method (safe way to splice without altering the original array)
arr.toSpliced(0, 1); // ["Banana"] (remove 1 element at index 0), does not change original array

arr.slice(1, 3); // ["Orange", "Apple"] (slice array from index 1 to 3) // slice out value into new array.

// find element
arr.indexOf("Apple"); // 2 (get index of element)
arr.lastIndexOf("Apple"); // 2 (get last index of element if same element is present multiple times)
arr.includes("Apple"); // true (check if element is present)

function findValue(value, index, array) {
  return value > 10;
}
arr.find(findValue); // find element greater than 10
arr.findLast((x) => x > 40); // find last element greater than 40

arr.findIndex(findValue); // find index of element greater than 10
arr.findIndexLast((x) => x > 40); // find last index of element greater than 40

// Array sort method
arr.sort(); // ["Apple", "Banana", "Mango", "Orange"] (sort array in ascending order)
arr.toSorted(); // ["Apple", "Banana", "Mango", "Orange"] (sort array in ascending order), does not change original array // new method - safe way.

arr.reverse(); // ["Orange", "Mango", "Banana", "Apple"] (reverse array)
arr.toReversed(); // ["Orange", "Mango", "Banana", "Apple"] (reverse array), does not change original array // new method - safe way.

arr.sort().reverse(); // ["Orange", "Mango", "Banana", "Apple"] (sort array in descending order)

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b); // [1, 5, 10, 25, 40, 100] (sort array in ascending order)
points.sort((a, b) => b - a); // [100, 40, 25, 10, 5, 1] (sort array in descending order)
points.sort(() => Math.random() - 0.5); // shuffle array (sort in random order)

// find highest and lowest value (no built-in method)
points.sort((a, b) => a - b)[0]; // 1 (find lowest value)
points.sort((a, b) => b - a)[0]; // 100 (find highest value)
points.reduce((a, b) => Math.min(a, b)); // 1 (find lowest value)
points.reduce((a, b) => Math.max(a, b)); // 100 (find highest value)

// find min or max (no built-in method)
points.sort((a, b) => a - b)[0]; // 1 (find min)
points.sort((a, b) => b - a)[0]; // 100 (find max)

// Sorting array of objects is insufficient to find min or max
Math.min.apply(null, arr);
Math.max.apply(null, arr);

// sort object array
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
cars.sort((a, b) => a.year - b.year); // sort object array by year

// Array iteration methods
const arr = [45, 4, 9, 16, 25];

arr.forEach((item, index, array) => console.log(item, index, array)); // iterate array
arr.map((x, index, array) => x * 2); // [90, 8, 18, 32, 50] (map array)
arr.flatMap((x) => [x, x * 2]); // [45, 90, 4, 8, 9, 18, 16, 32, 25, 50] (map and flatten array)
arr.filter((x, index, array) => x > 10); // [45, 16, 25] (filter array)
arr.reduce((total, value, index, array) => total + value); // 99 (reduce array)
arr.reduceRight((total, value, index, array) => total + value); // 99 (reduce array from right) (does not reduce original array)
arr.every((x, index, array) => x > 10); // false (check if all elements are greater than 10)
arr.some((x, index, array) => x > 10); // true (check if some elements are greater than 10)
arr.from("ABCDEFG"); // ["A", "B", "C", "D", "E", "F", "G"] (convert string to array)
arr.keys(); // iterator object with keys [0, 1, 2, 3, 4]
arr.entries(); // iterator object with key-value pairs [[0, 45], [1, 4], [2, 9], [3, 16], [4, 25]]
arr.values(); // iterator object with values [45, 4, 9, 16, 25]

const months = ["Januar", "Februar", "Mar", "April"];
months.with(2, "March"); // ["Januar", "Februar", "March", "April"] (add element at index 2) (safe way to add element without altering original array)
arr = [...arr]; // spread operator to copy array

// array destructuring
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
const [fruit1, fruit2] = fruits; // Bananas, Oranges
const [fruit1, , , fruit4] = fruits; // Bananas, Mangos
const { [0]: fruit1, [1]: fruit2 } = fruits; // Bananas, Oranges

// swap array elements
[firstName, lastName] = [lastName, firstName];
```

### Date

```javascript
// Date objects are static. clock in the computer is running not the date object.

const date = new Date();
const date = new Date("2021-01-01");
new Date(year, month, day, hours, minutes, seconds, milliseconds); // month is 0-11

date.toSting(); // "Thu Jan 01 2021 00:00:00 GMT+0000 (Coordinated Universal Time)"
date.toDateString(); // "Thu Jan 01 2021"
date.toUTCString(); // "Thu, 01 Jan 2021 00:00:00 GMT"
date.toISOString(); // "2021-01-01T00:00:00.000Z" (International Standard)
Date.parse("2021-01-01"); // 1609459200000 (milliseconds since 1970)
date.getFullYear(); // 2021
date.getYear(); // 24 (year - 1900) (deprecated)
date.getMonth(); // 9 (0-11)
date.getDate(); // 1 (1-31)
date.getHours(); // 0 (0-23)
date.getMinutes(); // 0 (0-59)
date.getSeconds(); // 0 (0-59)
date.getMilliseconds(); // 0 (0-999)
date.getDay(); // 4 (0-6) (0 is Sunday)
date.getTime(); // 1609459200000 (milliseconds since 1970)
date.now(); // 1609459200000 (milliseconds since 1970)

// UTC methods (UTC time is the same as GMT time)
date.getTimezoneOffset(); // -120 (offset in minutes)
date.getUTCDate(); // 1 (1-31)
date.getUTCDay(); // 4 (0-6) (0 is Sunday)
date.getUTCFullYear(); // 2021
date.getUTCHours(); // 0 (0-23)
// etc

// Set date methods
date.setFullYear(2022);
date.setMonth(10); // 10 (0-11)
date.setDate(10); // 10 (1-31)
date.setHours(10); // 10 (0-23)
date.setMinutes(10); // 10 (0-59)
date.setSeconds(10); // 10 (0-59)
date.setMilliseconds(10); // 10 (0-999)

const today = new Date();
const someday = new Date("2021-01-01");

// compare dates
today > someday; // true
```

### Maps

```javascript
const map = new Map();
typeof map; // object
map instanceof Map; // true

map.set("name", "John"); // add key-value pair
map.set("name", "Doe"); // update value
map.get("name"); // Doe: get value
map.size; // 1: get size of map
map.delete("name"); // remove key-value pair
map.clear(); // remove all key-value pairs
map.has("name"); // false: check if key is present
map.forEach((value, key) => console.log(key, value)); // iterate map
map.entries(); // iterator object with key-value pairs
map.keys(); // iterator object with keys
map.values(); // iterator object with values

const apples = { name: "Apples" };
const fruits = new Map();
fruits.set(apples, 500);
fruits.get("apples"); // undefined: object is not same

const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];
map.groupBy(({ quantity }) => (quantity > 200 ? "ok" : "low")); // group array of objects by key
```

### Sets

```javascript
const set = new Set();
typeof set; // object
set instanceof Set; // true

const set = new Set([1, 2, 3, 4, 5]); // create set from array
set.add(10); // add element
set.has(10); // true: check if element is present
set.delete(10); // remove element
set.clear(); // remove all elements
set.size; // 5: get size of set

set.forEach((item) => console.log(item)); // iterate set
set.values(); // iterator object with values
set.keys(); // iterator object with keys
set.entries(); // iterator object with key-value pairs
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

### Math Object

```javascript
Math.PI; // 3.141592653589793
Math.E; // 2.718281828459045
Math.SQRT2; // 1.4142135623730951
Math.SQRT1_2; // 0.7071067811865476
Math.LN2; // 0.6931471805599453
Math.LN10; // 2.302585092994046
Math.LOG2E; // 1.4426950408889634
Math.LOG10E; // 0.4342944819032518

// methods
Math.round(4.7); // 5 (round to nearest integer)
Math.ceil(4.4); // 5 (round up)
Math.floor(4.7); // 4 (round down)
Math.trunc(4.7); // 4 (remove decimal)
Math.sign(-4); // -1 (returns -1 if negative, 1 if positive, 0 if zero)
Math.pow(2, 3); // 8 (2^3) (power)
Math.sqrt(64); // 8 (square root)
Math.abs(-10); // 10 (absolute value)
Math.sin((90 * Math.PI) / 180); // 1 (sine) (angle in radians)
Math.cos((0 * Math.PI) / 180); // 1 (cosine) (angle in radians)
Math.min(0, 150, 30, 20, -8, -200); // -200 (minimum value)
Math.max(0, 150, 30, 20, -8, -200); // 150 (maximum value)
Math.random(); // random number between 0 and 1
Math.log(10); // 2.302585092994046 (natural logarithm)
Math.log2(10); // 3.321928094887362 (base 2 logarithm)

// etc
```

## Operators

### Optional Chaining

```javascript
const user = {
  name: "John",
  address: {
    street: "Main Street",
    city: "New York",
  },
};

const street = user.address?.street; // Main Street
const country = user.address?.country; // undefined
```

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

## Conditional Statements

### If Statement

```javascript
if (condition) {
  // code block
}
```

### Else Statement

```javascript
if (condition) {
  // code block
} else {
  // code block
}
```

### Else If Statement

```javascript
if (condition1) {
  // code block
} else if (condition2) {
  // code block
} else {
  // code block
}
```

## Switch Statement

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

## Loops

- `break` statement is used to exit the loop.
- `continue` statement is used to skip the current iteration and continue with the next iteration.
- `label` statement is used to identify a loop.

```javascript
label: for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i === 3 && j === 3) {
      break label;
    }
  }
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
```

### For Loop

```javascript
for (let i = 0; i < 5; i++) {
  // code block
}
```

### For/In Loop

```javascript
const person = { name: "John", age: 30, city: "New York" };

for (let x in person) {
  // code block
}
```

### For/Of Loop

```javascript
const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
  // code block
}
```

### While Loop

```javascript
while (condition) {
  // code block
}
```

### Do/While Loop

```javascript
do {
  // code block
} while (condition);
```

## Object vs Map

- Not directly iterable - directly iterable
- don't have size property - have size property
- key must be string - key can be any type
- key are not well ordered - key are well ordered
- have default key - no default key

Object.groupBy() vs Map.groupBy()

- Object.groupBy() groups elements into a javascript object.
- Map.groupBy() groups elements into a javascript map.
