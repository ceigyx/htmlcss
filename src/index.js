console.log('loaded');
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submitted');
  document.querySelector('form').reset();
});
