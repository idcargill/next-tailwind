export class Animal {
  name: string;
  age: number;
  canFly: boolean;

  constructor(name: string, age: number, canFly: boolean) {
    this.name = name;
    this.age = age;
    this.canFly = canFly;
  }

  public speak() {
    console.log('I am an Animal');
    return 10;
  }
}

class Dragon extends Animal {
  weapon: string;

  constructor(name: string, age: number, weapon: string) {
    super(name, age, true);
    this.weapon = weapon;
    this.name = name;
    this.age = age;
    this.canFly = true;
  }

  public speak() {
    console.log('I am a dragon');
    return 20;
  }

  private getData() {
    return 5;
  }
}

export default Dragon;
