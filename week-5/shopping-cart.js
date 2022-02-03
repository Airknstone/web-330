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
  //   Using JavaScript Iterators, create an iterator and in the body use a for…of statement to
  // loop over the products array. Yield return each iterated product object.
}
