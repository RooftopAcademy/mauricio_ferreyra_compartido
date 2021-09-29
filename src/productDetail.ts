import { store } from "."
import { render, toNumber } from "./helpers"
import renderNavbarAndAddLogic from "./helpers/renderNavbar"
import bodyDetailCourse from "./views/bodyDetailCourse"
import headDetailCourse from "./views/headDetailCourse"

/**
 * it is executed when you are in the detail of a product
 */
export default function productDetail () {

    renderNavbarAndAddLogic()

    toggleDropdownListOnClick()

    /**
     * get course id in local storage
     */
    let course = store.catalog.findById(toNumber(localStorage.getItem('id_course')!))!

    /**
     * render of the head and body of the course detail view
     */
    render(document.querySelector('.js-head-detail-course') as HTMLElement, headDetailCourse(course))
    render(document.querySelector('.js-body-detail-course') as HTMLElement, bodyDetailCourse(course))
}

/**
 * 
 * change the display state of course topics
 * drop dow list
 * 
 */
function toggleDropdownListOnClick () {
    let themes = document.querySelectorAll('.theme-conteiner-item')
    themes.forEach(theme => {
        theme.addEventListener('click', function(e) {
            e.preventDefault()
            themes.forEach(element => {
                if (element != theme) { element.classList.remove('active') }
            })
            theme.classList.contains('active') ? theme.classList.remove('active') : theme.classList.add('active')
        })
    })
}