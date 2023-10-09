// let foo: Function;

function calc(
  param1: number,
  param2: number,
  cb: (a: number, b: number) => number,
) {
  return cb(param1, param2);
}

function foo(a: number, b: number) {
  return a + b;
}

const result = calc(1, 3, foo);
