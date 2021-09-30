import {render} from "./helpers";
import renderNavbarAndAddLogic from "./helpers/renderNavbar";
import { store } from "./object/App";
import alertError from "./views/alertError";
import navbar from "./views/navbar";
import row from "./views/row";

export default function tableUser() {

    renderNavbarAndAddLogic()

    fetching()
}

/**
 * 
 * query in api to bring users
 * 
 */
function getUsers(): void {
    let tabla = document.querySelector('.js-tbody') as HTMLElement
    let msgErr = document.querySelector('.js-msg-error') as HTMLElement
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(json => json.forEach((user: {id: number, username: string, name: string, email: string}) => render(tabla,row(user))))
    .catch(_ => render(msgErr,alertError()))
}

async function fetching() {
    await getUsers()
}