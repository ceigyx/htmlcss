export class AuthForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.mode;
    this.shadowRoot.innerHTML = `
    
    `;
  }

  connectedCallback() {
    console.log('form connected');
  }

  disconnectedCallback() {

  }


  open() {

  }

  close() {

  }

  _render() {

  }

  submit() {

  }

  reset() {

  }

  attributeChangedCallback() {

  }
}

customElements.define('lib-auth-form', AuthForm);
