<!-- Hoisting, closures, promises, async/await, prototypes and inheritance, modules(import, export), event loop, high order function, currying, debouncing and throttling -->

## Iterables

- `iterable` is an object that has an `iterator` method.
- Iterables can be iterated over with `for of` loop.
- Can iterate over array, string, map, set, etc.
- The Iterator protocol defines how to produce a sequence of values from an object.
- The next() method returns an object with two properties: `value` and `done`.
- Iterables must implement the `Symbol.iterator` method.
- String, Array, TypedArray, Map, Set are all iterables because their prototype
  objects have a Symbol.iterator method.
