console.log('hello');


for (const element of document.getElementsByTagName('button')) {
    element.addEventListener('click', (e) => {
        e.target.nextElementSibling.play();    
    })

    element.nextElementSibling.onplay = function() {
        console.log(element, this)
        this.previousElementSibling.style.backgroundColor = 'red';
    }

    element.nextElementSibling.onended = function() {
        console.log(element, this)
        this.previousElementSibling.style.backgroundColor = '#333';
    }
}