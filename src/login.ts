function login() {
    let menssageError = document.getElementById('msg-error')
    let formulario = document.getElementById('login')!
    let username: HTMLInputElement = document.querySelector('.js-username')!
    let password: HTMLInputElement = document.querySelector('.js-password')!
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault()
        if (username.value == 'usuario' && password.value == '123456') {
            window.location.href = "/index.html"
        } else {
            menssageError?.classList.add('active')
        }
    })
}

export default login