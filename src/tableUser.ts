import render from "./helpers";

render(document.querySelector('.js-navbar'), navbar())
const tabla = document.querySelector('js-tbody')
let msgErr = document.querySelector('.js-msg-error')

function getUsers(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(json => json.forEach(user => {
        if (tabla) tabla.innerHTML += row(user)
    }))
    .catch(err =>  { if (msgErr) msgErr.innerHTML = msgError()})
}

async function fetching() {
    await getUsers()
}

fetching()