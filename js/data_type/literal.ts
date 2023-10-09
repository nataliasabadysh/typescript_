let active: "start" | "end";
active = "start";

// function example
const fruit: string[] = [];

function shop(arr: string[], value: string, action: "add" | "delete") {
  if (action === "add") {
    arr.push(value);
  } else {
    const index = arr.indexOf(value);
    arr.splice(index, 1);
  }

  return arr;
}

shop(fruit, "banana", "add");
