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
      throw new Error("Pilot too young");
    }
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }

  flyMessage(): void {
    console.log("Have a nice fly!");
  }
}

abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot): void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error("No pilot in cabin");
    }

    console.log("We are getting ready to take off");

    this.pilot.flyMessage();
    return true;
  }
}
