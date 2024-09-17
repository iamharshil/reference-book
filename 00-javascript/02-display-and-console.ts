// 1. by changing the innerHTML of an element
const demoElement = document.getElementById("demo");

if (demoElement) {
  demoElement.innerHTML = "Hello World!";
}

// 2. Using document.write

document.write("Hello World!");
// this will write the text to the document at the point where the script is placed
// Using document.write() after an HTML document is loaded, will delete all existing HTML:

// 3. Using window.alert
window.alert("Hello World!");

// 4. console
console.log("Hello World!");
console.error("Hello World!");
