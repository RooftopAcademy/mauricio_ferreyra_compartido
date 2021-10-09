/**
 * 
 * add the event to go to courseVideo.html
 * and save in the localstorage the video id
 * 
 * @param links is a list of video links
 * 
 */
export default function addEventClickLinkVideo(links: NodeListOf<Element>) {
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            localStorage.setItem('id_video', this.dataset.videoId)
            localStorage.setItem('id_theme', this.dataset.themeId)
        })
    })
}