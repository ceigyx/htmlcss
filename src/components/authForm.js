import html from './authForm.html';
import css from './authForm.css';

export class AuthForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.mode = 'sign-up';
    this.isOpen = false;
    this.shadowRoot.innerHTML = `<style>${css}</style>${html}`;
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
    this.shadowRoot.getElementById('backdrop').nextElementSibling.scrollIntoView(true);
  }

  close() {
    if (this.isOpen === false) {
      return;
    }
    if (this.mode !== 'sign-up') {
      setTimeout(() => {
        this.switchMode();
      }, 200);
      this.mode = 'sign-up';
    }
    this.reset();
    this.removeAttribute('opened');
    this.isOpen = false;
    this.modifyFocus('close');
  }

  modifyFocus(val) {
    const mode = val || this.mode;

    if (mode === this.mode) {
      if (mode === 'login') {
        for (const element of this.shadowRoot
          .getElementById('auth-form')
          .getElementsByClassName('sign-up')) {
          if (element.tagName === 'INPUT') {
            setTimeout(() => {
              element.removeAttribute('required');
              element.style.display = 'none';
              element.tabIndex = -1;
            }, 150);
            setTimeout(() => {
              this.shadowRoot.querySelector('#title').scrollIntoView(true);
            }, 400)
          }
        }
      } else {
        for (const element of this.shadowRoot
          .getElementById('auth-form')
          .getElementsByClassName('sign-up')) {
          if (element.tagName === 'INPUT') {
            element.setAttribute('required', '');
            element.style.display = 'block';
            element.tabIndex = 0;
          }
        }
        this.shadowRoot.querySelector('#title').scrollIntoView(true);
      }
    } else if (mode === 'open') {
      for (const element of this.shadowRoot
        .getElementById('auth-form')
        .getElementsByTagName('input')) {
        element.style.display = 'block';
        element.tabIndex = 0;
      }
      this.shadowRoot.getElementById('close').style.display = 'block';
      this.shadowRoot.getElementById('close').tabIndex = 0;

      this.shadowRoot.getElementById('login-or-signup').style.display =
        'inline-block';
      this.shadowRoot.getElementById('login-or-signup').tabIndex = 0;

      this.shadowRoot.getElementById('submit').style.display = 'block';
      this.shadowRoot.getElementById('submit').tabIndex = 0;

      for (const element of this.shadowRoot
        .getElementById('terms')
        .getElementsByTagName('a')) {
        element.style.display = 'inline-block';
        element.tabIndex = 0;
      }
    } else if (mode === 'close') {
      setTimeout(() => {
        for (const element of this.shadowRoot
          .getElementById('auth-form')
          .getElementsByTagName('input')) {
          element.style.display = 'none';
          element.tabIndex = -1;
        }
        this.shadowRoot.getElementById('close').style.display = 'none';
        this.shadowRoot.getElementById('close').tabIndex = -1;

        this.shadowRoot.getElementById('login-or-signup').style.display =
          'none';
        this.shadowRoot.getElementById('login-or-signup').tabIndex = -1;

        this.shadowRoot.getElementById('submit').style.display = 'none';
        this.shadowRoot.getElementById('submit').tabIndex = -1;

        for (const element of this.shadowRoot
          .getElementById('terms')
          .getElementsByTagName('a')) {
          element.style.display = 'none';
          element.tabIndex = -1;
        }
      }, 200);
    }
  }

  submit(data) {
    console.log('submitting...');
    const event = new Event(this.mode, {
      bubbles: true,
      composed: true,
      cancelable: true,
    });
    event.data = data;
    if (this.shadowRoot.dispatchEvent(event)) {
      this.reset();
    }
  }

  extract() {
    const data = {
      mode: this.mode,
    };
    this.formHandler().forEach((element) => {
      data[element.name] = element.value;
    });
    return data;
  }

  isValid() {
    let valid = true;
    this.formHandler().forEach((element) => {
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
      this.modifyFocus();
      this.shadowRoot.getElementById('email').focus();
      this.shadowRoot.getElementById('footer-auth-mode').innerHTML = `
      By clicking the Login button, you agree to our
      <a href="#"> Terms & Conditions</a> and
      <a href="#"> Privacy Policy </a>
      `;
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
      this.modifyFocus();
      this.shadowRoot.getElementById('first-name').focus();
      this.shadowRoot.getElementById('footer-auth-mode').innerHTML = `
      By clicking the Sign Up button, you agree to our
      <a href="#"> Terms & Conditions</a> and
      <a href="#"> Privacy Policy </a>
      `;
    }
    this.shadowRoot.getElementById('backdrop').nextElementSibling.scrollIntoView(true);
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
