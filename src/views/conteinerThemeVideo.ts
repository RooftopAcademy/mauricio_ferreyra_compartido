import Theme from "../object/Theme";

export default function conteinerThemeVideo (theme: Theme) {
    return `
    <li class="theme-conteiner-list line">
        <a class="theme-conteiner-item text-violet" data-theme-id="${theme.id}" href="">${theme.name}
            <i class="fas fa-chevron-down"></i>
        </a>
        
        <ul class="theme-conteiner-item-subitem js-list-video-by-theme" data-theme-id="${theme.id}">
        </ul>
    </li>
    `
}