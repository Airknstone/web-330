/* Title: validator.js
Author: Professor Krasso
Modified by: Allan Trejo
Date: 02-11-2022
Description: Compound Calculator App
Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks  */

/* Import Modules */
import { FloatField } from './float-field.js';
import { RequiredField } from './required-field.js';
import { FloatMinField } from './float-min-field.js';
import { FloatMaxField } from './float-max-field.js';

export class Validator {
  /* Array that holds imported objects when instantiated */
  validators = [];
  /* Holds Error messages */
  messages = [];

  constructor(name, field) {
    this.name = name;
    this.field = field;
  }
  /* Push imported objects when invoked  to validators array*/
  addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
  }
  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }
  addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }
  addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  /*runs through array and checks conditials
  if False, push error messages to messages array  */
  validate() {
    for (let valid of this.validators) {
      if (!valid.validate()) {
        this.messages.push(valid.getMessage());
        return false;
      }
    }
    return true;
  }
}
