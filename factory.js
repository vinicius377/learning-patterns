class Creator {
  factoryProduct() {}

  buyProduct() {
    const product = this.factoryProduct();

    product.buy();
  }
}

class CreatorProduct1 extends Creator {
  factoryProduct() {
    return new Product1();
  }
}

class CreatorProduct2 extends Creator {
  factoryProduct() {
    return new Product2();
  }
}

class Product1 {
  buy() {
    console.log("Product1 was bought!");
  }
}

class Product2 {
  buy() {
    console.log("Product2 was bought!");
  }
}

function onBuyProduct(creator) {
  creator.buyProduct();
}

onBuyProduct(new CreatorProduct1());
onBuyProduct(new CreatorProduct2());
