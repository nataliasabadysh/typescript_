type PersonType = {
  readonly name: string;
  age?: number;
  id: number;
  showName: () => void;
};

const person: PersonType = {
  name: "Natalia",
  id: 1,
  showName() {
    console.log(this.name);
  },
};
