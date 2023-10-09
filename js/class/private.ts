class A {
  private someProperty = "str";
}

class B extends A {
  showProperty() {
    console.log(this.someProperty);
  }
}
