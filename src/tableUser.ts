import {render} from "./helpers";
import { store } from "./object/App";
import alertError from "./views/alertError";
import navbar from "./views/navbar";
import row from "./views/row";

function tableUser() {

    render(document.querySelector('.js-navbar') as HTMLElement, navbar(store.user.username))
    document.querySelector('.js-btn-perfil')!.addEventListener('click', function() {
        console.log(this)
        this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active')
    })
    document.querySelector('#logout')!.addEventListener('click',() => store.user.logout())

    let tabla = document.querySelector('.js-tbody')
    let msgErr = document.querySelector('.js-msg-error')
    
    function getUsers(): void {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then(json => json.forEach((user: {id: number, username: string, name: string, email: string}) => {
            if (tabla) tabla.innerHTML += row(user)
        }))
        .catch(err =>  { if (msgErr) msgErr.innerHTML = alertError()})
    }
    
    async function fetching() {
        await getUsers()
    }
    
    fetching()
}

export default tableUser
