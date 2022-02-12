class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class='github'>
    <a href="#"><i class="fab fa-github"></i><br> GitHub </a>
    </div>


      <div class='bellevue'>
        Copyright &copy; 2022 <br><a href="#">Bellevue University</a>
       <br> <a href="#">Bellevue Course Repository</a> <br>
       <a href='#'><i class="fab fa-youtube"></i> Bellevue Youtube</a>
      </p>
    </footer>

      </body>
      </html>
        `;
  }
}

customElements.define('footer-component', FooterComponent);
