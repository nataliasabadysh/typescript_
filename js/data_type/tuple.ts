let arrayFixed: [string, number];
arrayFixed = ["age", 18];

// ts - will not check methods .push .pop
arrayFixed.push("new");
arrayFixed.pop();
