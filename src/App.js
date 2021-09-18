const store = new Store
store.fetchCourses()

let cursos = store.getCatalog().all()

const recomended = document.getElementById('recomended')


cursos.forEach((curso) => {
    recomended.innerHTML += courseItem(curso)
})


let a = document.querySelectorAll('.js-card-course')
a.forEach(element => {
    element.addEventListener('click', function(e) {
        // Obtengo el curso
        // falta enviar el dato y obtener los detalles aparte
        let curso = store.getCatalog().findById(this.dataset.courseId)
    })
})
