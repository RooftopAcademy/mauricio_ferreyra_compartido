import * as _ from 'lodash';
import render from "./helpers";
import store from "./object/App";
import { Course } from './object/Course';
import courseItem from "./views/courseItem";
import navbar from "./views/navbar";

store.fetchCourses()


let cursos: Course[] = store.catalog.all()
render(document.getElementById("inicio"), "Welcome to Geeks UI Learning Application")
render(document.querySelector('.js-navbar'), navbar())

let recomended: HTMLElement = document.getElementById('recomended')!
cursos.forEach((curso: Course) => {
    if (recomended) recomended.innerHTML += courseItem(curso)
})

document.querySelectorAll('.js-card-course').forEach(el => {
    el.addEventListener('click', function() {
        localStorage.setItem('id_course', this.dataset.courseId)
    })
})