let msgError = document.getElementById('msg-error')
let formulario = document.getElementById('login')
let button = formulario.enviar

formulario.addEventListener('submit', function(e) {
    e.preventDefault()

    if (formulario.username.value == 'usuario' && formulario.password.value == '123456') {
        window.location="/index.html"
    } else {
        msgError.classList.add('active')
    }

})