// Title: shopping-cart.js
// Author: Professor Krasso
// Modified by: Allan Trejo
// Date: 02-03-2022
// Description: Custom Iterable Object using generators
export class ShoppingCart {
  constructor() {
    this.products = [];
  }
  count() {
    return this.products.length;
  }

  add(product) {
    this.products.push(product);
  }

  *[Symbol.iterator]() {
    yield* this.products;
  }
}
