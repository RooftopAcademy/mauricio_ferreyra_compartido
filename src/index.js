import store from '../src/object/App.js'

let cursos = store.getCatalog().all()

document.getElementById("inicio").innerHTML = "Welcome to Geeks UI Learning Application"
document.querySelector('.js-navbar').innerHTML = navbar()

const recomended = document.getElementById('recomended')
cursos.forEach((curso) => {
    recomended.innerHTML += courseItem(curso)
})

document.querySelectorAll('.js-card-course').forEach(element => {
    element.addEventListener('click', function(e) {
        localStorage.setItem('id_course', this.dataset.courseId)
    })
})