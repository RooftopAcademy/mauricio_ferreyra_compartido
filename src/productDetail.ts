import { render, toNumber } from "./helpers"
import renderListVideos from "./helpers/renderListVideos"
import renderNavbarAndAddLogic from "./helpers/renderNavbar"
import toggleDropdownListOnClick from "./helpers/toggleDropdownListOnClick"
import { store } from "./object/App"
import bodyDetailCourse from "./views/bodyDetailCourse"
import headDetailCourse from "./views/headDetailCourse"

/**
 * it is executed when you are in the detail of a product
 */
export default function productDetail () {

    renderNavbarAndAddLogic()

    /**
     * get course id in local storage
     */
    let course = store.catalog.findById(toNumber(localStorage.getItem('id_course')!))!

    /**
     * render of the head and body of the course detail view
     */
    render(document.querySelector('.js-head-detail-course') as HTMLElement, headDetailCourse(course))
    render(document.querySelector('.js-body-detail-course') as HTMLElement, bodyDetailCourse(course))

    renderListVideos(course, document.querySelector('.js-conteiner-list-videos') as HTMLElement)

    toggleDropdownListOnClick(document.querySelectorAll('.theme-conteiner-item'))

    addEventClickLinkVideo()
}


/**
 * 
 * add the event to go to courseVideo.html
 * and save in the localstorage the video id
 * 
 */
function addEventClickLinkVideo() {
    let links = document.querySelectorAll('.js-link-video')
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            localStorage.setItem('id_video', this.dataset.videoId)
        })
    })
}