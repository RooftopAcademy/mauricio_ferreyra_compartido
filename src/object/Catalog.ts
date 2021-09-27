import { Course } from "./Course"

export class Catalog {
    _courses: Course[] = []

    constructor() {}

    all() {
        return this._courses
    }

    add(curso: Course) {
        this._courses.push(curso)
    }

    findById(id: number) {
        return this._courses.find(course => {
            return course.id == id
        })
    } 
}