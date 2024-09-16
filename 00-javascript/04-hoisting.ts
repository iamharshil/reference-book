function example() {
  console.log(a); // undefined, due to hoisting
  var a = 10;
  if (true) {
    var b = 20;
  }
  console.log(b); // 20, because var is function-scoped
}

example();

// let or const will fix this hoisting issue

function example2() {
  console.log(a); // ReferenceError: a is not defined
  let a = 10;
  if (true) {
    let b = 20;
  }
  console.log(b); // ReferenceError: b is not defined
}

example2();
