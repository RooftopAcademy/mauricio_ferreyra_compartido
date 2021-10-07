import { render, toNumber } from "./helpers"
import renderNavbarAndAddLogic from "./helpers/renderNavbar"
import { store } from "./object/App"
import { Course } from "./object/Course"
import Theme from "./object/Theme"
import Video from "./object/Video"
import bodyDetailCourse from "./views/bodyDetailCourse"
import conteinerThemeVideo from "./views/conteinerThemeVideo"
import headDetailCourse from "./views/headDetailCourse"
import itemLinkVideo from "./views/itemLinkVideo"

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

    renderListVideos(course)

    toggleDropdownListOnClick()
    
    addEventClickLinkVideo()
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

/**
 * 
 * dynamically create the list of videos in the html
 * 
 * @param course is a object course
 */
function renderListVideos(course: Course) {
    let conteinerVideos = document.querySelector('.js-conteiner-list-videos') as HTMLElement
    course.themes.forEach(theme => {
        render(conteinerVideos, conteinerThemeVideo(theme))
        theme.videoList.forEach(video => {
            document.querySelectorAll('.js-list-video-by-theme').forEach(el => {
                if (parseInt(el.getAttribute('data-theme-id')!) == theme.id) {
                    render(el as HTMLElement,itemLinkVideo(video))
                }
            })
        })
    })
}