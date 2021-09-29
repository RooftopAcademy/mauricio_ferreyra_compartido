import * as _ from 'lodash';
import {render, toNumber} from "./helpers";
import modifyFavorite from './helpers/modifyFavorite';
import renderNavbarAndAddLogic from './helpers/renderNavbar';
import { Course } from './object/Course';
import { Store } from './object/Store';
import courseItem from "./views/courseItem";

export let store = new Store
store.fetchCourses();
store.fetchUsers()
let user = store.users.findById(toNumber(localStorage.getItem('user_id')!))
if (user) store.user = user

export default  function index() {
    // obtenemos todos los cursos
    let courses: Course[] = store.catalog.all()

    renderNavbarAndAddLogic()
    render(document.getElementById("inicio") as HTMLElement, "Welcome to Geeks UI Learning Application")

    insertCoursesInHTML(courses)
    
    savesIdCourseInLocalStorageOnClick()

    modifyFavorite(document)
}


/**
 * 
 * insert a couse card in the html recommendation list
 * 
 * @param courses is the list of courses
 * 
 */
function insertCoursesInHTML(courses: Course[]) {
    let recomended = document.getElementById('recomended') as HTMLElement
    courses.forEach((curso: Course) => {
        render(recomended,courseItem(curso))
    })
}

/**
 * 
 * saves course id to local storage when this item is clicked
 * 
 */
function savesIdCourseInLocalStorageOnClick() {
    document.querySelectorAll('.js-card-course').forEach(course => {
        course.addEventListener('click', function() {
            localStorage.setItem('id_course', this.dataset.courseId)
        })
    })
}