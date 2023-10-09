interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

// readonly
interface ITest {
  readonly name: string;
}

// extends
interface IPilot extends IPerson {
  flyMessage(): void;
}

// optional (?)  name?: string;

let user: IPerson;

user = {
  name: "Anthony",
  age: 21,

  greet(phrase) {
    console.log(phrase + " " + this.name);
  },
};

user.greet("Hi all !");

// example 2
interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

class Pilot implements IPerson, IPilot {
  constructor(
    public name: string,
    public age: number,
  ) {
    if (this.age < 28) {
      throw new Error("Pilot to young");
    }
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }

  flyMessage(): void {
    console.log("Have a good fly");
  }
}

const pilot = new Pilot("Anthony", 32);

pilot.greet("Hi from the capitan!");
pilot.flyMessage();
