console.log('hello');
const player = document.getElementById('player');
const recorder = document.getElementById('recorder');
let audio = '';

recorder.addEventListener('click', (e) => {
  navigator.mediaDevices
    .getUserMedia({
      audio: true,
    })
    .then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();

      const audioChunks = [];

      mediaRecorder.addEventListener('dataavailable', (event) => {
        audioChunks.push(event.data);
      });

      mediaRecorder.addEventListener('stop', () => {
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        audio = new Audio(audioUrl);
        console.log(audioUrl);
        player.src = audio;
      });

      setTimeout(() => {
        mediaRecorder.stop();
      }, 3000);
    });
});

for (const element of document.getElementsByTagName('button')) {
  element.addEventListener('click', (e) => {
    e.target.nextElementSibling.play();
  });

  element.nextElementSibling.onplay = function () {
    this.previousElementSibling.style.backgroundColor = 'red';
  };

  element.nextElementSibling.onended = function () {
    this.previousElementSibling.style.backgroundColor = '#333';
  };
}
