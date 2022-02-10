export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }
  validate() {
    if (parseFloat(this.field) > this.min) {
      return true;
    }
    return false;
  }
  getMessage() {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
  }
}
