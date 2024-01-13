class People {
  #foodOrDrink;
  constructor(foodOrDrink) {
    this.#foodOrDrink = foodOrDrink;
  }

  ingest() {
    this.#foodOrDrink.ingest();
  }
}

class Food {
  eat() {
    console.log("People eat something!");
  }
}

class Drink {
  drink() {
    console.log("People drink something!");
  }
}

class FoodAdapter extends Food {
  ingest() {
    this.eat();
  }
}

class DrinkAdapter extends Drink {
  ingest() {
    this.drink();
  }
}

const people1 = new People(new FoodAdapter());
const people2 = new People(new DrinkAdapter());

people1.ingest();
people2.ingest();
