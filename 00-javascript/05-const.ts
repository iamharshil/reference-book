// Const is misleading
// it cannot be reassigned or redeclare but it can be mutated

const arr = [1, 2, 3];
arr[0] = 10;
arr.push(4);

console.log(arr); // [10, 2, 3, 4]

// use const with array, object, function or regex
