// calorie-converter.js
// Author: Professor Krasso
// Modified by: Allan Trejo
// Date: 01-27-2022
// Description: Static methods are called directly on the class (Car from the example above) -
//  without creating an instance/object (mycar) of the class.
import { FoodModel } from './food-model.js';

export class CalorieConverter {
  // Static array of FoodModel Objects, contains 6 items
  static data = [
    new FoodModel(1007, 'Egg', 78),
    new FoodModel(1008, 'Apple', 95),
    new FoodModel(1009, 'Hamburger', 354),
    new FoodModel(1010, 'Fries', 400),
    new FoodModel(1011, 'Banana', 105),
    new FoodModel(1012, 'Soda', 150),
  ];
  // Expected Result: Egg returns data[0]
  // Returns an array of objects if the object.name is included in user input
  static find(str) {
    return this.data.filter((data) => {
      if (str.includes(data.name.toLowerCase())) {
        return data;
      }
    });
  }
}
