import render from "./helpers";
import store from "./object/App";
import courseItem from "./views/courseItem";
import navbar from "./views/navbar";

let cursos: Course[] = store.catalog.all()
render(document.getElementById("inicio"), "Welcome to Geeks UI Learning Application")
render(document.querySelector('.js-navbar'), navbar())

let recomended: HTMLElement | null = document.getElementById('recomended')
cursos.forEach(curso => {
    if (recomended) recomended.innerHTML += courseItem(curso)
})

document.querySelectorAll('.js-card-course').forEach(el => {
    el.addEventListener('click', function() {
        localStorage.setItem('id_course', this.dataset.courseId)
    })
})