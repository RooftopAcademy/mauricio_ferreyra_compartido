import { render, toNumber } from "./helpers";
import addEventClickLinkVideo from "./helpers/addEventClickLinkVideo";
import renderListVideos from "./helpers/renderListVideos";
import renderNavbarAndAddLogic from "./helpers/renderNavbar";
import toggleDropdownListOnClick from "./helpers/toggleDropdownListOnClick";
import { store } from "./object/App";
import Theme from "./object/Theme";
import Video from "./object/Video";
import videoView from "./views/videoView";


export default function courseVideo() {
    renderNavbarAndAddLogic()

    let course = store.catalog.findById(toNumber(localStorage.getItem('id_course')!))!

    renderListVideos(course, document.querySelector('.js-conteiner-list-videos') as HTMLElement)

    toggleDropdownListOnClick(document.querySelectorAll('.theme-conteiner-item'))

    addEventClickLinkVideo(document.querySelectorAll('.js-link-video'))

    let conteinerVideo = document.querySelector('.js-conteiner-video') as HTMLElement
    let theme = course.findThemeById(toNumber(localStorage.getItem('id_theme')!)) as Theme
    let video = theme.findVideoById(toNumber(localStorage.getItem('id_video')!)) as Video

    render(conteinerVideo, videoView(video))
}