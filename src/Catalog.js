class Catalog {
    constructor() {
        this.courses = []
    }

    all(){
        return this.courses
    }
    
    add(course) {
        this.courses.push(course)
    }

    findById(id) {
        return this.products.find(course => {
            return course.id == id
        })
    }

}