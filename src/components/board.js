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
    const list = [
      { src: './assets/sound/Dark Souls Carving - Hello.mp3', name: 'Hello' },
      {
        src: './assets/sound/Dark Souls Carving - Help Me.mp3',
        name: 'Help Me',
      },
      {
        src: "./assets/sound/Dark Souls Carving - I'm Sorry.mp3",
        name: "I'm Sorry",
      },
      {
        src: './assets/sound/Dark Souls Carving - Thank You.mp3',
        name: 'Thank You',
      },
      {
        src: './assets/sound/Dark Souls Carving - Very Good.mp3',
        name: 'Very Good',
      },
      {
        src: './assets/sound/Gives me Conniptions.mp3',
        name: 'Conniptions',
      },
      {
        src: './assets/sound/Pritheeeeee.mp3',
        name: 'Pritheee',
      },
      {
        src: './assets/sound/Siegmeyer - mmm mmm mmm.mp3',
        name: 'Hmmm',
      },
    ];

    list.forEach((item) => {
      this.sounds.push(item.src);
      const el = this.soundTemplate.content.cloneNode(true);
      el.querySelector('button').innerHTML = item.name;
      el.querySelector('audio').src = item.src;
      this.board.appendChild(el);
    });
  }

  addSound(src) {
    if (src) {
        this.sounds.push(src);
        const el = this.soundTemplate.content.cloneNode(true);
        el.querySelector('button').innerHTML = this.sounds.length;
        el.querySelector('audio').src = src;
        this.board.appendChild(el);
        console.log('sound added')
    } else {
        console.log('src error')
    }
  }
}
