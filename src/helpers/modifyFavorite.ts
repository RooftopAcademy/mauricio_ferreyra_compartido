import { store } from ".."
import { Course } from "../object/Course"
import courseItem from "../views/courseItem"

export default function modifyFavorite(): void {
    let btnFavorite = document.querySelectorAll('.fa-bookmark')
    
    btnFavorite.forEach(item => {
        item.addEventListener('click', function(){ actionFavorite(this.dataset.courseId, this) })
    })
}

function actionFavorite(id:number, el: any) {
    el.classList.contains('far')? addCourseToFavoriteList(id, el) : removeCourseToFavoriteList(id, el)
}

function removeCourseToFavoriteList(id: number, el: any) {
    store.user.removeFavourite(id)
    el.classList.replace('fas','far')
    removeCourseToFavoriteListHTML(el)
}

function removeCourseToFavoriteListHTML(element: any) {
    let conteinerFavorite = document.getElementById('favorites')
    
    document.querySelectorAll('.js-card-course').forEach(curso => {
        if (curso.getAttribute('data-course-id') == element.dataset.courseId) {
            let aux = curso.querySelector('.fa-bookmark')
            aux?.classList.replace('fas','far')
            if (curso.parentElement?.getAttribute('id') == 'favorites') {
                conteinerFavorite?.removeChild(curso)
            }
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
        item.addEventListener('click', function() { actionFavorite(this.dataset.courseId, this) })
    })
}
