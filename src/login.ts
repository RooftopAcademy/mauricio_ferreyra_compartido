import { store } from "."
import { toNumber } from "./helpers"

function login() {
    store.fetchUsers()
    console.log(store.users.all())

    let menssageError = document.getElementById('msg-error')
    let formulario = document.getElementById('login')!
    let username: HTMLInputElement = document.querySelector('.js-username')!
    let password: HTMLInputElement = document.querySelector('.js-password')!
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault()
        store.users.all().forEach(user => {
            if (user.login(username.value, password.value) != undefined) {
                localStorage.setItem('user_id', user.login(username.value, password.value)?.toString()!)
                let u = store.users.findById(toNumber(localStorage.getItem('user_id')!))
                console.log(u)
                if (u) store.user = u
                window.location.href = "/index.html"
            }
        })
        menssageError?.classList.add('active')
    })
}

export default login