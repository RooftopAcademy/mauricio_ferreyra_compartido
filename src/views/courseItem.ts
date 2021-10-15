import { Course } from "../object/Course"

function courseItem(curso: Course): string {
    return `
    <a class="" href="./detalleProduct">
        <div class="card js-card-course" data-course-id="${curso.id}">
            <div>
                <img class="img-card" src="${curso.image}" alt="">
            </div>

            <div class="card-body">
                <h4 class="text-violet"><a class="card-body-title" href="${curso.description}">${curso.name}</a></h4>
                <div class="text-Light-purple card-body-detail">
                    <span>
                        <i class="far fa-clock"></i>
                    </span>
                    <p class="card-body-detail-time">${curso.duration}</p>
                    <span class="level">
                        <i class="fas fa-signal"></i>
                    </span>
                    <p>${curso.level}</p>
                </div>
                <div>
                    <span class="estrellas">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        ${curso.points}
                    </span>
                    <div style="display: flex; justify-content: space-between; margin-top: 15px;">
                        <p class="text-Light-purple">(${curso.views})</p>
                        <p>$${curso.price}</p>
                    </div>      
                </div>
            </div>
            <div class="card-footer">
                <div class="profesor">
                    <div>
                        <img src="${curso.photo_tutor}" width="25" alt="" style="border-radius: 50%;">
                    </div>
                    <p>${curso.name_tutor}</p>
                </div>
                <div>
                    <span>
                        <i class="far fa-bookmark" data-course-id="${curso.id}"></i>
                    </span>
                </div>
            </div>
        </div>
    </a>
    `
}

export default courseItem