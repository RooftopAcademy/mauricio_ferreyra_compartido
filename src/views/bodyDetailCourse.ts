import { Course } from "../object/Course";

function bodyDetailCourse(course: Course): string {
    return `
    <div class="conteiner-detalle">
        <div class="card">
            <div class="conteiner-img">
                <img class="img-card" src="${course.image}" alt="">
            </div>
            <div class="card-body">
                <p class="price">$600 <span class="price-del">$750</span> </p>
                <button class="button btn-morado">Srart Free Month</button>
                <button class="button btn-blanco">Get Full Access</button>
            </div>
        </div>
    </div>

    <div class="card-included">
        <ul style="padding: 0;">
            <li class="card-included-item line">
                <h3 class="card-included-title">What's included</h3>
            </li>
            <li class="card-included-item line">
                <span class="card-included-item-icon">
                    <i class="far fa-play-circle"></i>
                </span>
                <p class="card-included-text">12 hours video</p>
            </li>
            <li class="card-included-item line">
                <span class="card-included-item-icon">
                    <i class="fas fa-award"></i>
                </span>
                <p class="card-included-text">Certificate</p>
            </li>
            <li class="card-included-item line">
                <span class="card-included-item-icon">
                    <i class="far fa-calendar"></i>
                </span>
                <p class="card-included-text">12 Article</p>
            </li>
            <li class="card-included-item line">
                <span class="card-included-item-icon">
                    <i class="fas fa-video"></i>
                </span>
                <p class="card-included-text">Watch Offline</p>
            </li>
            <li class="card-included-item">
                <span class="card-included-item-icon">
                    <i class="far fa-clock"></i>
                </span>
                <p class="card-included-text">Lifetime access</p>
            </li>
        </ul>
    </div>
    `
}

export default bodyDetailCourse