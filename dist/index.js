import render from "./helpers";
import store from "./object/App";
import courseItem from "./views/courseItem";
import navbar from "./views/navbar";
var cursos = store.catalog.all();
render(document.getElementById("inicio"), "Welcome to Geeks UI Learning Application");
render(document.querySelector('.js-navbar'), navbar());
var recomended = document.getElementById('recomended');
cursos.forEach(function (curso) {
    if (recomended)
        recomended.innerHTML += courseItem(curso);
});
document.querySelectorAll('.js-card-course').forEach(function (el) {
    el.addEventListener('click', function () {
        localStorage.setItem('id_course', this.dataset.courseId);
    });
});
