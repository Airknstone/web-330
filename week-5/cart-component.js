// Title: cart-component.js
// Author: Professor Krasso
// Modified by: Allan Trejo
// Date: 02-03-2022
// Description: Web Components
class CartComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <i id='cartIcon' class="fa fa-shopping-cart"></i> (<span id='cart-count'></span>)
    `;
  }
}
customElements.define('cart-component', CartComponent);
