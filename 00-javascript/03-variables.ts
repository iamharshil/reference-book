// 1. var has global scope so when file is compiled it will be added at top of the file.
// there is few old browser which uses var instead of let and const. So, var will be used in old browser.

var a = 10;

function print() {
  console.log(a);
}

// var can be re-declared and re-assigned
var a = 20;
print(); // 20

// 2. let can be re-assigned but not re-declared
let b = 10;

function printB() {
  console.log(b);
}

// let b = 20; // SyntaxError: Identifier 'b' has already been declared
b = 20;
printB(); // 20

// 3. const can't be re-declared and re-assigned
const c = 10;

function printC() {
  console.log(c);
}

// Extra
let temp; // this will be undefined and it is called declaration
temp = 10; // this is called assignment

// var can start with _ or $ or letter (not with number)
let _temp = 10;
let $temp = 10;
let temp1 = 10;

// Assignment operator can be used for assigning or declare variable : =
let x = 10;
