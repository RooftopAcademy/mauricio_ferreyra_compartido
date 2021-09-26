import { Catalog } from "./Catalog"
import { Course } from "./Course"
import { User } from "./User"
import { Users } from "./Users"

export class Store {
    private _user!: User
    private _users: Users = new Users
    private _catalog: Catalog = new Catalog 
    private _iniciado: boolean = false 

    get catalog(): Catalog {
        return this._catalog
    }

    get user(): User {
        return this._user
    }

    set user(user: User) {
        this._user = user
    }

    get users() {
        return this._users
    }

    get iniciado() {
        return this._iniciado
    }

    set iniciado(valor: boolean) {
        this._iniciado = valor
    }
    
    fetchUsers() {
        let data: {id: number, username: string, password: string, state: boolean}[]  = [
            {id: 1, username: 'usuario', password: '123456', state: false},
            {id: 2, username: 'mauricio', password: '123456', state: false},
            {id: 3, username: 'josejuan', password: '123456', state: false},
        ]

        data.forEach((el: {id: number, username: string, password: string, state: boolean}) => {
            let user = new User
            user.id = el.id
            user.username = el.username
            user.password = el.password
            user.state = el.state

            this._users.add(user)
        })

    }

    fetchCourses(): void {
        
        type elementProduct = {
            id: number,
            name: string,
            duration: string,
            level: level,
            points: number,
            views: number,
            photo_tutor: string,
            name_tutor: string,
            description: string,
            image: string,
            languaje: string,
            price: number
        }

        let foto:string = 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
        let python:string = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg'
        let react:string = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg'
        let graphQl:string = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg'
        let angular:string = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg'
        
        let data:elementProduct[] = [
            {id: 1, name: 'The Python Course: build web application', duration: '2h 30m', level: 1, points: 4.5, views: 13245, photo_tutor: foto, name_tutor: 'Claire Robertson', description: 'JavaScript is the popular programming lenguage which powers web pages and web applications. This course will get you started coding in JavaScript.', image: python, languaje: 'Python', price: 600},
            {id: 2, name: 'How to easily create a website with React', duration: '3h 56m', level: 0, points: 4.5, views: 7700, photo_tutor: foto, name_tutor: 'Morris Mccoy', description: 'React is an open source Javascript library designed to create user interfaces with the aim of facilitating application development on a single page.', image: react, languaje: 'React', price: 600},
            {id: 3, name: 'GrapQL: introduction to graphQL for beginners', duration: '2h 46m', level: 0, points: 4.5, views: 9300, photo_tutor: foto, name_tutor: 'Ted Hawkins', description: '​GraphQL is a data manipulation and query language for APIs, and a runtime environment for querying existing data.', image: graphQl, languaje: 'GraphQL', price: 600},
            {id: 4, name: 'Angular - the complete guide for beginner', duration: '1h 30m', level: 0, points: 4.5, views: 8890, photo_tutor: foto, name_tutor: 'Claire Robertson', description: 'Angular is a web application framework developed in TypeScript, open source, maintained by Google, used to create and maintain single page web applications.', image: angular, languaje: 'Angular', price: 600},
        ]


        data.forEach((item: elementProduct) => {
            let curso: Course = new Course
            curso.id = item.id
            curso.name = item.name
            curso.duration = item.duration
            curso.level = item.level
            curso.points = item.points
            curso.views = item.views
            curso.photo_tutor = item.photo_tutor
            curso.name_tutor = item.name_tutor
            curso.description = item.description
            curso.image = item.image
            curso.lenguaje = item.languaje
            curso.price = item.price

            this._catalog.add(curso)
        })

    }
}