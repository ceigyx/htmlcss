export class AuthForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.mode = 'sign-up';
    this.isOpen = false;
    this.shadowRoot.innerHTML = `
    <style>
    
      :host {
        position: relative;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        height: 100%;
        }
          

      * {
        box-sizing: border-box;
        margin: auto;
        padding: 0;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        
      }
        
      .modal {
        height: auto;
        margin: auto;
        min-width: 240px;
        max-width: 480px;
        opacity: 0;
        background-color: #fefefe;
        padding: 20px 30px;
        border-radius: 3%;
        transition: opacity 0.3s ease;
        pointer-events: auto;
      }
      
      #outside {
        opacity: 0;
        color: white;
        padding-top: 10px;
        transition: opacity 0.4s ease;
        margin: auto;
      }

      #backdrop {
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-color: rgba(0,0,0,0.6); 
        height: 0px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease;
      }
      
      :host([opened]) {
        pointer-events: all;
        min-height: 100%;
      }
      
      :host([opened]) #backdrop {
        min-height: 100%;
        opacity: 1;
        pointer-events: all;
        height: 100vh;
        width: 100vw;
      }

      :host([opened]) .modal {
        opacity: 1;
        
      }

      :host([opened]) #outside {
        opacity: 1;
      }
      
      
      h1 {
          padding: 10px;
      }

      p {
          display: inline-block;
          padding: 10px auto; 
      }

      input {
          width: 100%;
          margin: auto;
          padding: 5px;
          font-size: medium;
          border: black 2px solid;
      }
    
      
      footer {
          word-wrap: normal;
          font-size: smaller;
        }
        
        a {
          display: inline-block;
          word-wrap: none;
          text-decoration: none;
        }
        

        
      label {
        display: block;
        text-align: left;
        margin-top: 20px;
        margin-bottom: 5px;
      }
      
      input {
        display: block;
      }

      input:invalid {
        color: red;
      }
      
      input:valid {
        color: green;
      }
      
      button {
        display: block;
        background-color: rgb(146, 212, 46);
        width: 100%;
        border-radius: 5px;
        margin: 20px auto;
        padding: 7px;
        font-weight: bold;
        color: #fefefe;
        box-shadow: inset -2px -2px;
        
      }
      
      button:active {
        box-shadow: inset 2px 2px;
      }
    
      *:focus {
        box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px rgb(146, 212, 46);
      }
      
      #login-or-signup {
        background-color: rgba(107, 99, 99, 0.75);
        color: rgb(146, 212, 46);
        border: solid 1px black;
        border-radius: 5px;
        padding: 6px;
        margin: auto;
        width: auto;
        display: inline-block;
      }

      .sign-up {
        display: block;
        opacity: 1;
        max-height: 60px;
        transition: opacity 0.3s, transform 0.3s, max-height 0.3s, margin 0.3s, padding 0.3s ease;
        transform: scaleY(1);
      }

      :host([login]) .sign-up {
        opacity: 0; 
        max-height: 0px;
        margin-top: 0px;
        padding: 0px;
        transform: scaleY(0);
      }


      #close {
        width: 60px;
        height: 30px;
        font-size: 0.85rem;
        position: relative;
        top: 0;
        left: 45%;

      }

      ::slotted(p) {
        color: black;
      }
      
      @media screen and (max-device-width: 680px) {
          .modal {
              min-width: 100%;
              border-radius: 2%;
          }

          * {
              font-size: 1.5rem;
          }

          h1 {
              font-size: 2rem;
          }

          body {
              padding: 3%;
          }

          label, input {
              height: 100px;
          }

          label {
              margin-top: 10%;
          }

          button {
              padding: 3%;
              margin-top: 50px;
          }
      }

      @media screen and (max-device-width: 1024px) {
          .modal {
              min-width: 75%;
          }

          * {
              font-size: 1.5rem;
          }

          h1 {
              font-size: 2rem;
          }

          label, input {
              height: 50px;
          }

          label {
              margin-top: 5%;
          }

          button {
              padding: 3%;
              margin-top: 50px;
          }
      }

      @media screen and (min-device-width: 2561px) {
          .modal {
              min-width: 480px;
              max-width: 800px;
          }

          * {
              font-size: 1.5rem;
          }

          h1 {
              font-size: 2rem;
          }

          label, input {
              height: 50px;
          }

          label {
              margin-top: 5%;
          }

          button {
              padding: 3%;
              margin-top: 50px;
          }
      }

      </style>
    
    <div id="backdrop">
    </div>
    <div class="modal">
      <button id="close">close</button>
      <h1 id="title">Sign Up</h2>
        <form id="auth-form">
            <hr>
            <label for="first-name"  class="sign-up">First Name</label>
            <input required type="text" name="first-name" class="sign-up" id="first-name" placeholder="John">
            <label for="last-name"  class="sign-up">Last Name</label>
            <input required type="text" name="last-name" class="sign-up" id="last-name" placeholder="Doe">
            <label for="email">Email</label>
            <input required type="email" name="email" id="email" placeholder="email@domain.com">
            <label for="password">Password</label>
            <input minlength="6" maxlength="30" required type="password" name="password" id="password" placeholder="*****">
            <label for="confirm-password"  class="sign-up">Confirm Password</label>
            <input minlength="6" maxlength="30" required type="password"  class="sign-up" name="confirm-password" id="confirm-password" placeholder="*****">
            <br>
            <hr>
            <button type="submit" value="Sign-Up" id="submit">Sign Up</button>
      </form>
        <footer>
            <p>By clicking the </p> <p id="footer-auth-mode"> Sign Up</p> button, you agree to our
                <a href="#"> Terms & Conditions</a> and
                <a href="#"> Privacy Policy </a></p>
        </footer>
    </div>
    <div id="outside">
    <p id="footer-already-or-dont">Already </p>
    <p>have an account?</p> <button id="login-or-signup" value="Login Here">Login Here</button>
    </div>
    `;
    this.shadowRoot
      .querySelector('form')
      .addEventListener('submit', (event) => {
        event.preventDefault();
      });
  }

  connectedCallback() {
    console.log('form connected');
    this.shadowRoot.addEventListener('click', (event) => {
      if (event.target.id === 'submit') {
        if (event.target.value === 'Sign-Up') {
          if (this.isValid()) {
            this.submit(this.extract());
          }
        } else if (event.target.value === 'Login') {
          if (this.isValid()) {
            this.submit(this.extract());
          }
        } else {
          return;
        }
      } else if (event.target.id === 'login-or-signup') {
        if (event.target.value === 'Login Here') {
          this.reset();
          this.switchMode();
        } else if (event.target.value === 'Sign Up Here') {
          this.reset();
          this.switchMode();
        } else {
          return;
        }
      } else if (
        event.target.id === 'close' ||
        event.target.id === 'backdrop'
      ) {
        this.close();
      }
    });
  }

  open() {
    if (this.isOpen === true) {
      return;
    }
    this.setAttribute('opened', '');
    this.isOpen = true;
    this.modifyFocus('open');
    this.shadowRoot.querySelector('input').focus();
  }

  close() {
    if (this.isOpen === false) {
      return;
    }
    if (this.confirmClose()) {
      this.reset();
      this.removeAttribute('opened');
      this.isOpen = false;
      this.modifyFocus('close');
    }
  }

  modifyFocus(val) {
    const mode = val || this.mode;

    if (mode === this.mode) {
      if (mode === 'login') {
        for (const element of this.shadowRoot.getElementById('auth-form').getElementsByClassName('sign-up')) {
          if (element.tagName === 'INPUT') {
            element.tabIndex = -1;
          }
        }
      } else {
        for (const element of this.shadowRoot.getElementById('auth-form').getElementsByClassName('sign-up')) {
          if (element.tagName === 'INPUT') {
            element.tabIndex = 0;
          }
        }  
      }
    } else if (mode === 'open') {
      for (const element of this.shadowRoot.getElementById('auth-form').getElementsByTagName('input')) {
        element.tabIndex = 0;
      }
      this.shadowRoot.getElementById('close').tabIndex = 0;
      this.shadowRoot.getElementById('login-or-signup').tabIndex = 0;
      this.shadowRoot.getElementById('submit').tabIndex = 0;
      
    } else if (mode === 'close') {
      for (const element of this.shadowRoot.getElementById('auth-form').getElementsByTagName('input')) {
        element.tabIndex = -1;
      }
      
      this.shadowRoot.getElementById('close').tabIndex = -1;
      this.shadowRoot.getElementById('login-or-signup').tabIndex = -1;
      this.shadowRoot.getElementById('submit').tabIndex = -1;
    }
  }

  confirmClose() {
    return confirm('Are you sure you want to leave?');
  }

  submit(data) {
    console.log('submitting...')
    const event = new Event(this.mode, {
      bubbles: true,
      composed: true,
      cancelable: true
    })
    event.data = data;
    if (this.shadowRoot.dispatchEvent(event)) {
      this.reset()
    }
  }

  extract() {
    const data = {
      mode: this.mode
    };
    this.formHandler().forEach(element => {
      data[element.name] = element.value;
    });
    return data;
  }

  isValid() {
    let valid = true;
    this.formHandler().forEach(element => {
      if (!element.checkValidity()) {
        valid = false;
      }
    });
    return valid;
  }
  
  formHandler() {
    const form = this.shadowRoot.getElementById('auth-form');
    const activeElements = [];
    for (const element of form.querySelectorAll('input')) {
      if (element.className === this.mode || !element.hasAttribute('class')) {
        activeElements.push(element);
      }
    }
    return activeElements;
  }

  reset() {
    this.shadowRoot.querySelector('form').reset();
  }

  switchMode() {
    if (this.mode === 'sign-up') {
      this.mode = 'login';
      if (this.hasAttribute('sign-up')) {
        this.removeAttribute('sign-up');
      }
      if (!this.hasAttribute('login')) {
        this.setAttribute('login', '');
      }
      this.shadowRoot.getElementById('submit').value = 'Login';
      this.shadowRoot.getElementById('submit').textContent = 'Login';
      this.shadowRoot.getElementById('title').textContent = 'Login';
      this.shadowRoot.getElementById('login-or-signup').value = 'Sign Up Here';
      this.shadowRoot.getElementById('login-or-signup').textContent =
        'Sign Up Here';
      this.shadowRoot.getElementById('footer-already-or-dont').textContent =
        "Don't ";
      this.shadowRoot.getElementById('email').focus();
      this.modifyFocus();
    } else {
      this.mode = 'sign-up';
      if (this.hasAttribute('login')) {
        this.removeAttribute('login');
      }
      if (!this.hasAttribute('sign-up')) {
        this.setAttribute('sign-up', '');
      }
      this.shadowRoot.getElementById('submit').value = 'Sign-Up';
      this.shadowRoot.getElementById('submit').textContent = 'Sign Up';
      this.shadowRoot.getElementById('title').textContent = 'Sign Up';
      this.shadowRoot.getElementById('login-or-signup').value = 'Login Here';
      this.shadowRoot.getElementById('login-or-signup').textContent =
        'Login Here';
      this.shadowRoot.getElementById('footer-already-or-dont').textContent =
        'Already ';
      this.shadowRoot.getElementById('first-name').focus()
      this.modifyFocus();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.hasAttribute('opened')) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }

    if (this.hasAttribute('sign-up')) {
      this.mode = 'sign-up';
    } else if (this.hasAttribute('login')) {
      this.mode = 'login';
    }
  }

  static get observedAttributes() {
    return ['opened', 'login', 'sign-up'];
  }
}

customElements.define('lib-auth-form', AuthForm);
