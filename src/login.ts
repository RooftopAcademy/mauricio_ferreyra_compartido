import { store } from "./object/App"

export default function login() {

    /**
     * initialice form field
     */
    let menssageError = document.getElementById('msg-error')
    let formulario = document.getElementById('login')!
    let username: HTMLInputElement = document.querySelector('.js-username')!
    let password: HTMLInputElement = document.querySelector('.js-password')!
    
    /**
     * Add event to login form
     */
    formulario.addEventListener('submit', function(e) {
        e.preventDefault()
        store.users.all().forEach(user => {

            /**
             * verify that the user exists and save the id in the local storage
             */
            if (user.login(username.value, password.value) != undefined) {
                localStorage.setItem('user_id', user.login(username.value, password.value)?.toString()!)
                window.location.href = "/index.html"
            }
        })
        menssageError?.classList.add('active')
    })
}


