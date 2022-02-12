/* Title: float-field.js
Author: Professor Krasso
Modified by: Allan Trejo
Date: 02-11-2022
Description: Compound Calculator App
Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks  */

export class FloatField {
  /* Constructor */
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  /* Determines if field is Nan */
  validate() {
    if (isNaN(this.field)) {
      return false;
    }
    return true;
  }
  /* Returns Error message Solution */
  getMessage() {
    return `${this.name} must be a string, you entered ${this.field}`;
  }
}
