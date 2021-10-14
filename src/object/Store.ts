import level from "../enum/LevelEnum"
import elementProduct from "../types/elementProduct"
import { Catalog } from "./Catalog"
import { Course } from "./Course"
import Theme from "./Theme"
import { User } from "./User"
import { Users } from "./Users"
import Video from "./Video"

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

    async fetchCourses() {

        await fetch('http://localhost:8000/api/courses')
        .then(res => res.json())
        .then((json) => {
            console.log(json)
            json.forEach((item: elementProduct) => {
                let curso: Course = new Course
                curso.id = item.id
                curso.name = item.name
                curso.duration = item.duration
                curso.level = level[item.level]
                curso.points = item.points
                curso.views = item.views
                curso.photo_tutor = item.photo_tutor
                curso.name_tutor = item.name_tutor
                curso.description = item.description
                curso.image = item.image
                curso.lenguaje = item.languaje
                curso.price = item.price
    
    
                item.theme.forEach(element => {
                    let theme: Theme = new Theme
                    theme.id = element.id
                    theme.name = element.name
                    element.video.forEach(itemVideo => {
                        let video = new Video
                        video.id = itemVideo.id
                        video.name = itemVideo.name
                        video.video = itemVideo.url
    
                        theme.add(video)
                    })
                    curso.addTheme(theme)
                })
    
                this._catalog.add(curso)
            })
        })
    }

}