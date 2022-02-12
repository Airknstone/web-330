/* Title: float-max-field.js
Author: Professor Krasso
Modified by: Allan Trejo
Date: 02-11-2022
Description: Compound Calculator App
Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks  */

export class FloatMaxField {
  /* constructor */
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }
  /* checks if field is less than max returns boolean */
  validate() {
    if (parseFloat(this.field) < this.max) {
      return true;
    }
    return false;
  }
  /* Error Message */
  getMessage() {
    return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
  }
}
