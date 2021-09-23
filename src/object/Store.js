class Store {
    constructor () {
        this.user = new User
        this.catalog = new Catalog
    }

    getCatalog() {
        return this.catalog
    } 

    fetchCourses() {
        let foto = 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
        let python = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg'
        let react = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg'
        let graphQl = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg'
        let angular = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg'
        let data = [
            {id: 1, name: 'The Python Course: build web application', duration: '2h 30m', level: 'intermediate', points: '4.5', views: 13245, photo_tutor: foto, name_tutor: 'Claire Robertson', description: 'JavaScript is the popular programming lenguage which powers web pages and web applications. This course will get you started coding in JavaScript.', image: python, languaje: 'Python', price: 600},
            {id: 2, name: 'How to easily create a website with React', duration: '3h 56m', level: 'Beginner', points: '4.5', views: 7700, photo_tutor: foto, name_tutor: 'Morris Mccoy', description: 'React is an open source Javascript library designed to create user interfaces with the aim of facilitating application development on a single page.', image: react, languaje: 'React', price: 600},
            {id: 3, name: 'GrapQL: introduction to graphQL for beginners', duration: '2h 46m', level: 'Beginner', points: '4.5', views: 9300, photo_tutor: foto, name_tutor: 'Ted Hawkins', description: '​GraphQL is a data manipulation and query language for APIs, and a runtime environment for querying existing data.', image: graphQl, languaje: 'GraphQL', price: 600},
            {id: 4, name: 'Angular - the complete guide for beginner', duration: '1h 30m', level: 'Beginner', points: '4.5', views: 8890, photo_tutor: foto, name_tutor: 'Claire Robertson', description: 'Angular is a web application framework developed in TypeScript, open source, maintained by Google, used to create and maintain single page web applications.', image: angular, languaje: 'Angular', price: 600},
        ]

        data.forEach(item => {
            
            let curso = new Course
            curso.setId(item.id)
            curso.setName(item.name)
            curso.setLenguaje(item.languaje)
            curso.setDescription(item.description)
            curso.setLevel(item.level)
            curso.setDuration(item.duration)
            curso.setImage(item.image)
            curso.setPrice(item.price)
            curso.setViews(item.views)
            curso.setPoints(item.points)
            curso.setPhotoTutor(item.photo_tutor)
            curso.setNameTutor(item.name_tutor)

            this.catalog.add(curso)

        })
        
    }
}