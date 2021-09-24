import { Course } from "../object/Course";

function headDetailCourse(course: Course):string {
    return `
    <div class="inicio">
        <div class="conteiner-welcome">
            <h1 class="title">Getting Started with ${course.lenguaje}</h1>
            <p class="description">
                ${course.description}
            </p>
            <div class="description2">
                <div class="bookmark">
                    <span>
                        <i class="icon-grey far fa-bookmark"></i>
                    </span>
                    <p class="text-white bookmark-text">Bookmark</p>
                </div>
                <div class="view d-flex align-items-center">
                    <span class="text-white">
                        <i class="icon-grey far fa-user"></i>
                        ${course.views}
                    </span>
                    <p class="text-white my-1">Enrolled</p>
                </div>
                <div class="stars d-flex align-items-center">
                    <span class="estrellas">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </span>
                    <p class="text-white my-1">(${course.points})</p>
                </div>
            </div>
        </div>
    </div>
    `
}