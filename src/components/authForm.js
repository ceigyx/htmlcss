export class AuthForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          z-index: 1;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          height: 100%;
        }
        
        .backdrop {
          position: relative;
          background-color: rgba(0,0,0,0.6);
          height: 100vh;
          width: 100vw;
          padding-top: 20%;
          
        }

        .modal {
          background-color: white;
          height: auto;
          min-width: 200px;
          width: fit-content;
          margin: auto;
        }
      </style>
      <div class="backdrop">
        <div class="modal">
          <header>title</header>
          <form>form</form>
          <footer>switch</footer>
        </div>
      </div>
    `;
  }
  
  connectedCallback() {
    console.log('form connected');
    // this.shadowRoot.addEventListener('click', (event) => {
    //   if (event.target.id === 'submit') {
    //     if (event.target.value === 'Sign-Up') {
    //       console.log('process sign up form')
    //     } else if (event.target.value === 'Login') {
    //       console.log('auth user & login')
    //     } else {
    //       return;
    //     }
    //   } else if (event.target.id === 'login-or-signup') {
    //     if (event.target.value === 'Login Here') {
    //       console.log('switch to login');
    //       this.reset();
    //       this._switchMode();
    //     } else if (event.target.value === 'Sign Up Here') {
    //       console.log('switch to sign up');
    //       this.reset();
    //       this._switchMode();
    //     } else {
    //       return;
    //     }
    //   } else if (event.target.id === 'close') {
    //     this.close();
    //   }
    // })
  }




  // open() {
  //   if (this.isOpen === true) {
  //     return;
  //   }
  //   this.setAttribute('opened', '');
  //   this.isOpen = true;
  // }

  // close() {
  //   if (this.isOpen === false) {
  //     return;
  //   }
  //   this.reset();
  //   this.removeAttribute('opened');
  //   this.isOpen = false;
  // }

  // submit() {

  // }

  // reset() {
  //   this.shadowRoot.querySelector('form').reset();
  // }

  // _switchMode() {
  //   if (this.mode === 'sign-up') {
  //     this.mode = 'login';
  //     if (this.hasAttribute('sign-up')) {
  //       this.removeAttribute('sign-up');
  //     }
  //     if (!this.hasAttribute('login')) {
  //       this.setAttribute('login', '')
  //     }
  //     this.shadowRoot.getElementById('submit').value = 'Login';
  //     this.shadowRoot.getElementById('submit').textContent = 'Login';
  //     this.shadowRoot.getElementById('title').textContent = 'Login';
  //     this.shadowRoot.getElementById('login-or-signup').value = 'Sign Up Here';
  //     this.shadowRoot.getElementById('login-or-signup').textContent = 'Sign Up Here';
  //   } else {
  //     this.mode = 'sign-up';
  //     if (this.hasAttribute('login')) {
  //       this.removeAttribute('login');
  //     }
  //     if (!this.hasAttribute('sign-up')) {
  //       this.setAttribute('sign-up', '')
  //     }
  //     this.shadowRoot.getElementById('submit').value = 'Sign-Up';
  //     this.shadowRoot.getElementById('submit').textContent = 'Sign Up';
  //     this.shadowRoot.getElementById('title').textContent = 'Sign Up';
  //     this.shadowRoot.getElementById('login-or-signup').value = 'Login Here';
  //     this.shadowRoot.getElementById('login-or-signup').textContent = 'Login Here';
  //   }
  // }

  // attributeChangedCallback(name, oldValue, newValue) {
  //   if (this.hasAttribute('opened')) {
  //     this.isOpen = true;
  //   } else {
  //     this.isOpen = false;
  //   }

  //   if (this.hasAttribute('sign-up')) {
  //     this.mode = 'sign-up';
  //   } else if (this.hasAttribute('login')) {
  //     this.mode = 'login'
  //   }
  // }

  // static get observedAttributes() {
  //   return ['opened', 'login', 'sign-up'];
  // }
}

customElements.define('lib-auth-form', AuthForm);
