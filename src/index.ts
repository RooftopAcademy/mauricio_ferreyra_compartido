import * as _ from 'lodash';
import {render, toNumber} from "./helpers";
import { Course } from './object/Course';
import { Store } from './object/Store';
import courseItem from "./views/courseItem";
import navbar from "./views/navbar";

export let store = new Store
store.fetchCourses();
// let u = store.users.findById(toNumber(localStorage.getItem('user_id')!))
// if (u) store.user = u
// console.log(store.user)

function index() {
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
}

export default index
