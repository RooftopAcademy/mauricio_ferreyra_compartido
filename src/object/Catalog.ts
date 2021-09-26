import { Course } from "./Course"

export class Catalog {
    _courses: Course[] = []

    constructor() {}

    all(): Course[] {
        return this._courses
    }

    add(curso: Course) {
        this._courses.push(curso)
    }

    findById(id: number): Course | undefined {
        return this._courses.find(course => course.id == id)
    } 
}