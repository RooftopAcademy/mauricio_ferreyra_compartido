import { store } from "."
import { render, toNumber } from "./helpers"
import bodyDetailCourse from "./views/bodyDetailCourse"
import headDetailCourse from "./views/headDetailCourse"
import navbar from "./views/navbar"

function detalleProducto () {
    render(document.querySelector('.js-navbar') as HTMLElement, navbar(store.user.username))
    document.querySelector('.js-btn-perfil')!.addEventListener('click', function() {
        console.log(this)
        this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active')
    })
    document.querySelector('#logout')!.addEventListener('click',() => store.user.logout())
    
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

    render(document.querySelector('.js-head-detail-course') as HTMLElement, headDetailCourse(course))
    render(document.querySelector('.js-body-detail-course') as HTMLElement, bodyDetailCourse(course))
}

export default detalleProducto