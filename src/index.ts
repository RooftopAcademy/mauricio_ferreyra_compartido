import * as _ from 'lodash';
import {render, toNumber} from "./helpers";
import modifyFavorite from './helpers/modifyFavorite';
import { Course } from './object/Course';
import { Store } from './object/Store';
import courseItem from "./views/courseItem";
import navbar from "./views/navbar";

export let store = new Store
store.fetchCourses();
store.fetchUsers()
let user = store.users.findById(toNumber(localStorage.getItem('user_id')!))
if (user) store.user = user

function index() {
    let cursos: Course[] = store.catalog.all()

    render(document.getElementById("inicio"), "Welcome to Geeks UI Learning Application")
    render(document.querySelector('.js-navbar'), navbar(store.user.username))

    document.querySelector('.js-btn-perfil')!.addEventListener('click', function() {
        this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active')
    })

    document.querySelector('#logout')!.addEventListener('click',() => store.user.logout())
    
    let recomended: HTMLElement = document.getElementById('recomended')!

    cursos.forEach((curso: Course) => {
        if (recomended) recomended.innerHTML += courseItem(curso)
    })

    document.querySelectorAll('.js-card-course').forEach(el => {
        el.addEventListener('click', function() {
            localStorage.setItem('id_course', this.dataset.courseId)
        })
    })

    modifyFavorite(document)
}


export default index