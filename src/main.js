console.log('loaded');
import styles from './styles/styles.scss'
document
  .querySelector('.overlay.hamburger')
  .appendChild(document.querySelector('template')
  .content.cloneNode(true)
);
