import store from '../src/App.js'

document.querySelector('.js-navbar').innerHTML = navbar()
let themes = document.querySelectorAll('.theme-conteiner-item')

themes.forEach((item, index) => {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        themes.forEach(element => {
            if (element != item) element.classList.remove('active')
        })
        item.classList.contains('active') ? item.classList.remove('active') : item.classList.add('active')
    })
})


let course = store.catalog.findById(localStorage.getItem('id_course'))

document.querySelector('.js-head-detail-course').innerHTML = headDetailCourse(course)
document.querySelector('.js-body-detail-course').innerHTML = bodyDetailCourse(course)