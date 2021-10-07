import { toNumber } from "./helpers";
import renderListVideos from "./helpers/renderListVideos";
import renderNavbarAndAddLogic from "./helpers/renderNavbar";
import toggleDropdownListOnClick from "./helpers/toggleDropdownListOnClick";
import { store } from "./object/App";


export default function courseVideo() {
    renderNavbarAndAddLogic()

    let course = store.catalog.findById(toNumber(localStorage.getItem('id_course')!))!
    console.log(course)

    renderListVideos(course, document.querySelector('.js-conteiner-list-videos') as HTMLElement)

    toggleDropdownListOnClick(document.querySelectorAll('.theme-conteiner-item'))

    // console.log(localStorage.getItem('id_video'))   
}