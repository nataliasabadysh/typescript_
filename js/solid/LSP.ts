class Vehicle {
  public startEngine() {
    // Default engine start functionality
  }

  public accelerate() {
    // Default acceleration functionality
  }
}

class Car extends Vehicle {
  public startEngine() {
    this.engageIgnition();
    super.startEngine();
  }

  private engageIgnition() {
    // Ignition procedure
  }
}

class ElectricBus extends Vehicle {
  public accelerate() {
    this.increaseVoltage();
    this.connectIndividualEngines();
  }

  private increaseVoltage() {
    // Electric logic
  }

  private connectIndividualEngines() {
    // Connection logic
  }
}
