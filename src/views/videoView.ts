import Video from "../object/Video";

export default function videoView(video: Video) {
    return `
        <h3 class="conteiner-view-video-title text-violet">${video.name}</h3>
        <iframe style="width: 100%;" height="500" src="${video.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
}