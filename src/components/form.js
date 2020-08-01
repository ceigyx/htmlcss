export class Form extends HTMLFormElement {
  constructor() {
    super();
  }
}

customElements.define('lib-form', Form, {
  extends: 'form',
});
