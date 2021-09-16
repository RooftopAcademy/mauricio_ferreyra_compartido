let msgError = document.getElementById('msg-error')
let formulario = document.getElementById('login')
let button = formulario.enviar
console.log(msgError)

formulario.addEventListener('submit', function(e) {
    e.preventDefault()

    if (formulario.username.value == 'usuario' && formulario.password.value == '123456') {
        console.log('paso')
        window.location="/index.html"
    } else {
        msgError.classList.add('active')
    }

})