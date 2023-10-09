interface IProduct {
  getInfo(): void;
}

class Small implements IProduct {
  getInfo(): void {
    console.log("I'm small");
  }
}
class Big implements IProduct {
  getInfo(): void {
    console.log("I'm big");
  }
}

class Factory {
  private objects = {
    small: Small,
    big: Big,
  } as any;

  create(type: string): IProduct {
    const { objects } = this;

    type = type.toLowerCase();
    if (!objects[type]) {
      throw new Error("No classes to create");
    }

    return new objects[type]();
  }
}

const factory = new Factory();

const small = factory.create("small");
const big = factory.create("big");

small.getInfo();
big.getInfo();
