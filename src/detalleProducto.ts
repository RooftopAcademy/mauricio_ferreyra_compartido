import { store } from "."
import { render, toNumber } from "./helpers"
import bodyDetailCourse from "./views/bodyDetailCourse"
import headDetailCourse from "./views/headDetailCourse"
import navbar from "./views/navbar"

function detalleProducto () {
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

    let course = store.catalog.findById(toNumber(localStorage.getItem('id_course')!))!

    render(document.querySelector('.js-head-detail-course'), headDetailCourse(course))
    render(document.querySelector('.js-body-detail-course'), bodyDetailCourse(course))
}

export default detalleProducto