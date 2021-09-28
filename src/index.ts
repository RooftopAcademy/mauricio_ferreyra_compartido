import * as _ from 'lodash';
import {render, toNumber} from "./helpers";
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

    document.querySelectorAll('.fa-bookmark').forEach(item => {
        item.addEventListener('click', function(){
            let id:number = this.dataset.courseId
            actionFavorite(id, this)
        })
    })

    function actionFavorite(id:number, el: any) {
        if (el.classList.contains('far')) {
            addCourseToFavoriteList(id, el)
        } else {
            removeCourseToFavoriteList(id, el)
        }
    }

    function removeCourseToFavoriteList(id: number, el: any) {
        store.user.removeFavourite(id)
        el.classList.replace('fas','far')
        removeCourseToFavoriteListHTML(el)
    }

    function removeCourseToFavoriteListHTML(element: any) {
        let b = document.getElementById('favorites')
        b!.querySelectorAll('.js-card-course').forEach(g => {
            if (g.getAttribute('data-course-id') == element.dataset.courseId) {
                b?.removeChild(g)
            }
        })
    }

    function addCourseToFavoriteList(id: number, el: any) {
        store.user.addFavourite(id)
        el.classList.replace('far','fas')
        createListfavourit()
        let curso = store.catalog.findById(id)
        if (curso) {
            insertCourseToFavoriteListHTML(curso)
        }
    }

    function isFirstCourse(): boolean {
        return store.user.favourite.length == 1
    }

    function createListfavourit(): void {
        if (isFirstCourse()) {
            document.querySelector('.js-favourite-list')!.innerHTML = `
            <h2 class="text-violet lista-title">Favorites</h2>
            <div id="favorites" class="lista"></div>`
        }
    }

    function insertCourseToFavoriteListHTML(curso: Course): void {
        let listFavorite = document.getElementById('favorites')
        listFavorite!.innerHTML += courseItem(curso)
        listFavorite?.querySelectorAll('.fa-bookmark').forEach(item => {
            item.classList.replace('far','fas')
            item.addEventListener('click', function() {
                console.log(this)
                let id:number = this.dataset.courseId
                actionFavorite(id, this)
            })
        })
    }
}


export default index