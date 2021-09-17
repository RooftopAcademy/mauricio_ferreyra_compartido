// Welcome to Geeks UI Learning Application
document.getElementById("inicio").innerHTML = "Welcome to Geeks UI Learning Application"

let foto = 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
let foto2 = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg'
let courses = [
    {title: 'The Python Course: build web application', time: '2h 30m', level: 'intermediate', stars: '4.5', view: 13.245, photo_tutor: foto, name_tutor: 'Claire Robertson', detalle: './detalleProducto.html', image: foto2},
    {title: 'The Python Course: build web application', time: '2h 30m', level: 'intermediate', stars: '4.5', view: 13.245, photo_tutor: foto, name_tutor: 'Claire Robertson', detalle: './detalleProducto.html', image: foto2},
    {title: 'The Python Course: build web application', time: '2h 30m', level: 'intermediate', stars: '4.5', view: 13.245, photo_tutor: foto, name_tutor: 'Claire Robertson', detalle: './detalleProducto.html', image: foto2},
    {title: 'The Python Course: build web application', time: '2h 30m', level: 'intermediate', stars: '4.5', view: 13.245, photo_tutor: foto, name_tutor: 'Claire Robertson', detalle: './detalleProducto.html', image: foto2},
]
const recomended = document.getElementById('recomended')

courses.forEach(element => {
    recomended.innerHTML += `
    <a href="${element.detalle}">
        <div class="card">
            <div>
                <img class="img-card" src="${element.image}" alt="">
            </div>

            <div class="card-body">
                <h4 class="text-violet"><a class="card-body-title" href="${element.detalle}">${element.title}</a></h4>
                <div class="text-Light-purple card-body-detail">
                    <span>
                        <i class="far fa-clock"></i>
                    </span>
                    <p class="card-body-detail-time">${element.time}</p>
                    <span class="level">
                        <i class="fas fa-signal"></i>
                    </span>
                    <p>${element.level}</p>
                </div>
                <div>
                    <span class="estrellas">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        ${element.stars}
                    </span> <p class="text-Light-purple" style="margin-top: 15px;">(${element.view})</p>        
                </div>
            </div>
            <div class="card-footer">
                <div class="profesor">
                    <div>
                        <img src="${element.photo_tutor}" width="25" alt="" style="border-radius: 50%;">
                    </div>
                    <p>${element.name_tutor}</p>
                </div>
                <div>
                    <span>
                        <i class="far fa-bookmark"></i>
                    </span>
                </div>
            </div>
        </div>
    </a>`
})

