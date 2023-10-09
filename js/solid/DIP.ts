class Animal {
  private foodProvider: Feeder;

  constructor(feeder: Feeder) {
    this.foodProvider = feeder;
  }

  eat() {
    this.foodProvider.getFood();
    // eat
  }
}
