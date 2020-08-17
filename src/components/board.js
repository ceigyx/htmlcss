import fetch from './fetch';
import Sound from './sound';

export default class Board {
  constructor() {
    this.sounds = [];
    this.board = document.getElementById('soundboard');
    this.soundTemplate = document.getElementById('audioBtnElement');
    this.setupListener();
    this.fetchServer();
  }

  setupListener() {
    this.board.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        e.target.nextElementSibling.play();
      }
    });
  }

  fetchServer() {
    fetch().forEach((item) => {
      const sound = new Sound(item.src, item.name);
      this.sounds.push(sound);
      this.createButtonFor(sound);
    });
  }

  addSound(src, name) {
    if (src && name && name !== '') {
      const sound = new Sound(src, name);
      this.sounds.push(sound);
      this.createButtonFor(sound);
    } else {
      console.log('src or name error');
    }
  }

  createButtonFor(sound) {
    const el = this.soundTemplate.content.cloneNode(true);
    el.querySelector('button').innerHTML = sound.name;
    el.querySelector('audio').src = sound.source;

    const wrapper = document.createElement('div');
    wrapper.id = sound.name;
    wrapper.appendChild(el);
    wrapper.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        this.board.removeChild(document.getElementById(sound.name));
      }
    });

    this.board.appendChild(wrapper);
  }
}
