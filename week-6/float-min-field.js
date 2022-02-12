/* Title: float-min-field.js
Author: Professor Krasso
Modified by: Allan Trejo
Date: 02-11-2022
Description: Compound Calculator App
Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks  */

export class FloatMinField {
  /* constructor */
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }
  /* Checks if field is greater than min returns Boolean */
  validate() {
    if (parseFloat(this.field) > this.min) {
      return true;
    }
    return false;
  }
  /* Error Mesage */
  getMessage() {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
  }
}
