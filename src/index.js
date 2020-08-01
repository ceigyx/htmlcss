import { components } from "./components";

console.log('index.js loaded');
console.log('components: ⤵');
console.dir(components);
console.log('components: ⤴');

document.getElementById('open').addEventListener('click', () => {
    document.querySelector('lib-auth-form').open();
})