import Video from "../object/Video";

export default function itemLinkVideo(video: Video, idTheme: number) {
    return `
    <li class="theme-conteiner-item-subitem-conteiner">
        <a href="./courseVideo.html" class="theme-conteiner-subitem-play js-link-video" data-video-id="${video.id}" data-theme-id="${idTheme}">
            <div class="theme-conteiner-subitem-play-cont">
                <span class="icon-play">
                    <i class="fas fa-play"></i>
                </span>
                <p class="little-text-theme">${video.name}</p>
            </div>
            <p class="little-text-theme">1m 7s</p>
        </a>
    </li>
    `
}