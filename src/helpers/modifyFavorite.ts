import { render } from "../helpers"
import { store } from "../object/App"
import { Course } from "../object/Course"
import courseItem from "../views/courseItem"

export default function modifyFavorite(document: Document): void {
    let btnFavorite = document.querySelectorAll('.fa-bookmark')
    
    btnFavorite.forEach(item => {
        item.addEventListener('click', function(){ actionFavorite(this.dataset.courseId, this) })
    })
}

/**
 * 
 * Evaluates whether to add or remove a course from the list
 * 
 * @param id is the value of the course id
 * @param el is the valor "this"
 */
function actionFavorite(id:number, el: any) {
    el.classList.contains('far')? addCourseToFavoriteList(id, el) : removeCourseToFavoriteList(id, el)
}

/**
 * 
 * Remove item from favorites list
 * 
 * @param id is the value of the course id
 * @param el is the valor "this"
 */
function removeCourseToFavoriteList(id: number, el: any) {
    store.user.removeFavourite(id)
    changeIcon(el, 'fas', 'far')
    removeCourseToFavoriteListHTML(el)
}


/**
 * 
 * Change the favorite icon
 * 
 * @param elemento is the valor "this"
 * @param oldClass is the valor of current class
 * @param newClass is the valor of the new class
 */
function changeIcon(elemento:Element, oldClass: string, newClass: string) {
    console.log('aa')
    elemento.classList.replace(oldClass,newClass)
}


/**
 * 
 * Remove te course from the favorites list in the html
 * 
 * @param element is the valor "this"
 */
function removeCourseToFavoriteListHTML(element: any) {
    let conteinerFavorite = document.getElementById('favorites')
    
    document.querySelectorAll('.js-card-course').forEach(curso => {
        if (curso.getAttribute('data-course-id') == element.dataset.courseId) {
            let aux: Element = curso.querySelector('.fa-bookmark')!
            changeIcon(aux,'fas','far')
            if (curso.parentElement?.getAttribute('id') == 'favorites') {
                conteinerFavorite?.removeChild(curso)
            }
        }
    })
}

/**
 * 
 * Add the course to the favorites list
 * 
 * @param id is the value of the course id
 * @param el is the valor "this"
 */
function addCourseToFavoriteList(id: number, el: any) {
    store.user.addFavourite(id)
    changeIcon(el,'far','fas')
    createListfavourit()
    let curso = store.catalog.findById(id)
    if (curso) {
        insertCourseToFavoriteListHTML(curso)
    }
}

/**
 * 
 * @returns returns true if the size of the favorites list is 1
 */
function isFirstCourse(): boolean {
    return store.user.favourite.length == 1
}

/**
 * Create favorites view in html
 */
function createListfavourit(): void {
    if (isFirstCourse()) {
        document.querySelector('.js-favourite-list')!.innerHTML = `
        <h2 class="text-violet lista-title">Favorites</h2>
        <div id="favorites" class="lista"></div>`
    }
}

/**
 * 
 * Create course card in html favorite list
 * 
 * @param curso is the object course
 */
function insertCourseToFavoriteListHTML(curso: Course): void {
    let listFavorite = document.getElementById('favorites') as HTMLElement
    render(listFavorite,courseItem(curso))
    listFavorite?.querySelectorAll('.fa-bookmark').forEach(item => {
        changeIcon(item,'far','fas')
        item.addEventListener('click', function() { actionFavorite(this.dataset.courseId, this) })
    })
}
