export class AuthForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.mode = 'sign-up';
    this.isOpen = false;
    this.shadowRoot.innerHTML = `
    <style>
    
    :host {
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }
          

        * {
            box-sizing: border-box;
            margin: auto;
            padding: 0;
            text-align: center;
            font-family: Arial, Helvetica, sans-serif;
          }
          
          .container {
            position: relative;
            z-index: 100;
            min-width: 240px;
            max-width: 480px;
            opacity: 0;
            background-color: #fefefe;
            padding: 20px 30px;
            border-radius: 3%;
            transition: opacity 0.3s ease;
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
          }
          
          ::slotted(p) {
    
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
          
          #outside {
            opacity: 0;
            position: relative;
            color: white;
            padding-top: 10px;
            z-index: 100;
            transition: opacity 0.4s ease;
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

        @media screen and (max-device-width: 680px) {
            .container {
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
            .container {
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
            .container {
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

        
        #backdrop {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          max-height: 0;
          background: rgba(0,0,0,0.6);
          z-index: 10;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }
        
        :host([opened]) {
          pointer-events: all;
        }

        :host([opened]) #backdrop {
          position: absolute;
          max-height: 100vh;
          opacity: 0.75;
          pointer-events: all;
        }

        :host([opened]) .container {
          opacity: 1;
          
        }

        :host([opened]) #outside {
          opacity: 1;
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
          width: 30px;
          height: 30px;
          font-size: 1rem;
          position: relative;
          top: 0;
          left: 45%;
        }
        
        </style>
    
    <div id="backdrop"></div>
    <div class="container">
    <button id="close">X</button>
        <form id="auth-form" sign-up>
            <!-- Dynamic content -> switch between sign up and sign in -->    
            <h1 id="title">Sign Up</h2>
                <!--  -->
            <slot name="intro">Default text</slot>
                <!-- visibility based on mode -->
            <label for="first-name"  class="sign-up">First Name</label>
            <input required type="text" name="first-name" class="sign-up" id="first-name" placeholder="John">
            <label for="last-name"  class="sign-up">Last Name</label>
            <input required type="text" name="last-name" class="sign-up" id="last-name" placeholder="Doe">

            <label for="email">Email</label>
            <input required type="email" name="email" id="email" placeholder="email@domain.com">
            <label for="password">Password</label>
            <input required type="password" name="password" id="password" placeholder="*****">
                <!-- visibility based on mode  -->
            <label for="confirm-password"  class="sign-up">Confirm Password</label>
            <input required type="password"  class="sign-up" name="confirm-password" id="confirm-password" placeholder="*****">
              
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
    this.shadowRoot.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }
  
  connectedCallback() {
    console.log('form connected');
    this.shadowRoot.addEventListener('click', (event) => {
      if (event.target.id === 'submit') {
        if (event.target.value === 'Sign-Up') {
          console.log('process sign up form')
        } else if (event.target.value === 'Login') {
          console.log('auth user & login')
        } else {
          return;
        }
      } else if (event.target.id === 'login-or-signup') {
        if (event.target.value === 'Login Here') {
          console.log('switch to login');
          this.reset();
          this._switchMode();
        } else if (event.target.value === 'Sign Up Here') {
          console.log('switch to sign up');
          this.reset();
          this._switchMode();
        } else {
          return;
        }
      } else if (event.target.id === 'close') {
        this.close();
      }
    })
  }




  open() {
    if (this.isOpen === true) {
      return;
    }
    this.setAttribute('opened', '');
    this.isOpen = true;
  }

  close() {
    if (this.isOpen === false) {
      return;
    }
    this.reset();
    this.removeAttribute('opened');
    this.isOpen = false;
  }

  submit() {

  }

  reset() {
    this.shadowRoot.querySelector('form').reset();
  }

  _switchMode() {
    if (this.mode === 'sign-up') {
      this.mode = 'login';
      if (this.hasAttribute('sign-up')) {
        this.removeAttribute('sign-up');
      }
      if (!this.hasAttribute('login')) {
        this.setAttribute('login', '')
      }
      this.shadowRoot.getElementById('submit').value = 'Login';
      this.shadowRoot.getElementById('submit').textContent = 'Login';
      this.shadowRoot.getElementById('title').textContent = 'Login';
      this.shadowRoot.getElementById('login-or-signup').value = 'Sign Up Here';
      this.shadowRoot.getElementById('login-or-signup').textContent = 'Sign Up Here';
    } else {
      this.mode = 'sign-up';
      if (this.hasAttribute('login')) {
        this.removeAttribute('login');
      }
      if (!this.hasAttribute('sign-up')) {
        this.setAttribute('sign-up', '')
      }
      this.shadowRoot.getElementById('submit').value = 'Sign-Up';
      this.shadowRoot.getElementById('submit').textContent = 'Sign Up';
      this.shadowRoot.getElementById('title').textContent = 'Sign Up';
      this.shadowRoot.getElementById('login-or-signup').value = 'Login Here';
      this.shadowRoot.getElementById('login-or-signup').textContent = 'Login Here';
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
      this.mode = 'login'
    }
  }

  static get observedAttributes() {
    return ['opened', 'login', 'sign-up'];
  }
}

customElements.define('lib-auth-form', AuthForm);
