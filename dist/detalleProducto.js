import render from "./helpers";
import navbar from "./views/navbar";
render(document.querySelector('.js-navbar'), navbar());
var themes = document.querySelectorAll('.theme-conteiner-item');
themes.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        themes.forEach(function (element) {
            if (element != item)
                element.classList.remove('active');
        });
        item.classList.contains('active') ? item.classList.remove('active') : item.classList.add('active');
    });
});
