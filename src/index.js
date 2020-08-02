

document.getElementById('open').addEventListener('click', () => {
    document.querySelector('lib-auth-form').open();
})

document.addEventListener('sign-up', event => {
    console.log(event);
})

document.addEventListener('login', event => {
    console.log(event);
})

console.log('index.js loaded');