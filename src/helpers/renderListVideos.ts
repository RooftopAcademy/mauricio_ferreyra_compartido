import { render } from "../helpers"
import { Course } from "../object/Course"
import conteinerThemeVideo from "../views/conteinerThemeVideo"
import itemLinkVideo from "../views/itemLinkVideo"

/**
 * 
 * dynamically create the list of videos in the html
 * 
 * @param course is a object course
 */
export default function renderListVideos(course: Course, conteinerVideos: HTMLElement) {
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