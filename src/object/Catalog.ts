class Catalog {
    _courses!: Course[]

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