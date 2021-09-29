import { store } from "..";
import { render } from "../helpers";
import navbar from "../views/navbar";

export default function renderNavbarAndAddLogic () {
    /**
     * render the navbar
     */
    render(document.querySelector('.js-navbar') as HTMLElement, navbar(store.user.username))

    /**
     * togle button profile of menu
     */
    let btnProfile = document.querySelector('.js-btn-perfil') as HTMLElement
    btnProfile.addEventListener('click', function() {
        this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active')
    })

    /**
     * user logout in navbar
     */
    let logout = document.querySelector('#logout') as HTMLElement
    logout.addEventListener('click',() => store.user.logout())
}