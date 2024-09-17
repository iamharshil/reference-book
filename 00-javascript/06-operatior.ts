// there are many more operators:
/*
Arithmetic operators
Assignment operators
Comparison operators
String operators
Logical operators
Bitwise operators
Ternary operator
Type operators
*/

// Assignment operator
const a = 10;
const b = 20;

// arithmetic operators, ++, --, %, **, +, -, *, /, += -= *= /=
const c = a + b;
const d = a - b;
const e = a * b;
const f = a / b;

// Comparison operator
const g = a > b;
const h = a < b;
const i = a >= b;
const j = a <= b;
const k = a === b;
const l = a !== b;

// String operator
const m = "Hello";
const n = "World";
const o = m + n; // all the comparison operators can be used with string

// Logical operators
const p = true;
const q = false;
const r = p && q;
const s = p || q;
const t = !p;

// Type operators
const u = typeof a;
const v = a instanceof Number;

// Bitwise operators
const w = a & b;
const x = a | b;
const y = a ^ b;
const z = ~a;
const aa = a << b;
const ab = a >> b;
const ac = a >>> b;

// Shift operators
// <<, >>, >>>
const ad = 8 << 2; // 32
const ae = 8 >> 2; // 2
const af = 8 >>> 2; // 2
const ag = -8 >> 2; // -2
const ah = -8 >>> 2; // 1073741822
const ai = -8 <<= 2; // -32
const aj = -8 >>= 2; // -2
const ak = -8 >>>= 2; // 1073741822

// Logical assignment operators
// &&=, ||=, ??=
const al = true &&= false; // false
const am = true ||= false; // true
const an = null ??= 10; // 10