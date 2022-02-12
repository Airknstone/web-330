/* Title: float-field.js
Author: Professor Krasso
Modified by: Allan Trejo
Date: 02-11-2022
Description: Compound Calculator App
Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks  */

export class RequiredField {
  /* constructor */
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }
  /* if field is empty return false */
  validate() {
    if (this.field) {
      return true;
    }
    return false;
  }

  /* Error Message */
  getMessage() {
    return `${this.name}is a required field.`;
  }
}
