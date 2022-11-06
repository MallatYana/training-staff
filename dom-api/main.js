let button = document.getElementById('buttonTry')

let headline = document.querySelector('h2')

button.addEventListener('mouseover', () => {
    headline.style.color = "red"
    headline.dataset.memo = headline.innerText
    headline.innerText = "click it already"
})
button.addEventListener('mouseout', () => {
    headline.style.color = "unset"
    headline.innerText = headline.dataset.memo
})
button.addEventListener('mousedown', () => {
    button.innerText = "RELEASE ME"
})
button.addEventListener('mouseup', () => {
    button.innerText = "THANKS"
    setTimeout(() => {
        button.innerText = "hehe"
    }, 500)
})


//ненумерованный список, формочка "текстовый инпут + кнопка добавить" <-- по кнопке добавить добавлять элемент в список

let list = document.getElementById('list')
let input = document.querySelector('input')

let textAdder = document.getElementById('textAdder')
textAdder.addEventListener('click', () => {
    let someText = input.value
    let element = document.createElement('li')
    element.innerText = someText
    let ol = document.querySelector('#list ol')
    ol.appendChild(element)
    input.value = ''
})