// Title: product.js
// Author: Professor Krasso
// Modified by: Allan Trejo
// Date: 02-03-2022
// Description: Simple Class
export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = Math.random().toString(16).slice(2);
  }
}
