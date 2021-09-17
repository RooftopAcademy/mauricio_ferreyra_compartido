const store = new Store
store.fetchCourses()

let cursos = store.getCatalog().all()

const recomended = document.getElementById('recomended')

cursos.forEach((curso) => {
    recomended.innerHTML += courseItem(curso)
})

