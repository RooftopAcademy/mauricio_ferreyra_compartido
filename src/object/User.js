class User {
    constructor() {
        this.id = Number
        this.username = String
        this.password = String
        this.favourite = Array
        this.courses = Array
        this.state = Boolean
    }
    
    getId() {
        return this.id
    }

    getUsername() {
        return this.username
    }

    getPassword() {
        return this.password
    }

    getFavourite() {
        return this.favourite
    }

    getCourses() {
        return this.courses
    }

    getState() {
        return this.state
    }
}