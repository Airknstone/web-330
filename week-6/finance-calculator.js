/* // Title: finance-calculator.js
// Author: Professor Krasso
// Modified by: Allan Trejo
// Date: 02-11-2022
// Description: Compound Calculator App
// Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks */

export class FinanceCalculator {
  /* Static Variable */
  static MONTHS_IN_YEAR = 12;

  /* Calculates future value */
  static calculateFutureValue(monthlyPayment, rate, years) {
    const month = years * this.MONTHS_IN_YEAR;
    let interestRate = 1 + rate / 100;
    let presentValue = monthlyPayment * month;
    let futureValue = presentValue * Math.pow(interestRate, month);
    return futureValue.toFixed(2);
  }

  /* Formats string as currency */
  static convertToCurrency(field) {
    let currenyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return currenyFormatter.format(field);
  }
}
