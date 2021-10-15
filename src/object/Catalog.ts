import { Course } from "./Course"
import List from "./List"

export class Catalog extends List {
    _courses: Course[] = []

    constructor() {
        super()
    }

    all(): Course[] {
        return this._courses
    }

    add(curso: Course) {
        this._courses.push(curso)
        this.resultado = [...this._courses]
    }

    findById(id: number): Course | undefined {
        return this._courses.find(course => course.id == id)
    }

}
