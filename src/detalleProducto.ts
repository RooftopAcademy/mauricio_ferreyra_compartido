import render from "./helpers"

render(document.querySelector('.js-navbar'), navbar())

let themes = document.querySelectorAll('.theme-conteiner-item')
themes.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        themes.forEach(element => {
            if (element != item) element.classList.remove('active')
        })
        item.classList.contains('active') ? item.classList.remove('active') : item.classList.add('active')
    })
})