let union: number | string;

union = 10;
union = "Natalia";

// union = true

// function example
function combine(param1: string | number, param2: string | number) {
  if (typeof param1 === "string" || typeof param2 === "string") {
    return param1.toString() + param1.toString();
  }

  return param1 + param2;
}
