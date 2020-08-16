console.log('hello');
// import components from './components'
import Sound from './components/sound.js'
import Board from './components/board.js'


const soundBoard = new Board();

import './components/recorder.js'

const audio = document.getElementById('recorder-audio');

navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
    const mediaRecorder = new MediaRecorder(stream);
    document.getElementById('recorder-record').onclick = function (e) {
      if (mediaRecorder.state === 'inactive') {
        mediaRecorder.start();
        e.target.innerHTML = 'STOP';
      } else {
        mediaRecorder.stop();
        e.target.innerHTML = 'RECORD';
      }
    };
    mediaRecorder.ondataavailable = function (e) {
      chunks.push(e.data);
    };
    let chunks = [];
    mediaRecorder.onstop = function (e) {
      const blob = new Blob(chunks, { type: 'mpeg' });
      document.getElementById(
        'recorder-audio'
      ).src = window.URL.createObjectURL(blob);
      chunks = [];
    };
  })
  .catch((err) => {
    console.log(err);
  });

function deleteAudio() {
    audio.src = '';
}

document.getElementById('recorder-play').addEventListener('click', (e) => {
  audio.play();
});

document.getElementById('recorder-add').addEventListener('click', (e) => {
  const src = audio.src;
  soundBoard.addSound(src);
  deleteAudio();
});

document.getElementById('recorder-delete').addEventListener('click', (e) => {
  deleteAudio();
});
