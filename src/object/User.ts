import { Course } from "./Course"

export class User implements UserInterface {
    
    private _id!: number
    _username!: string
    _password!: string
    private _favourite: number[] = []
    private _courses!: []
    private _state!: boolean

    set id(valor: number) {
        this._id = valor
    }

    get id(): number {
        return this._id
    }

    set username(valor: string) {
        this._username = valor 
    }

    get username(): string {
        return this._username
    }

    get password(): string {
        return this._password
    }

    set password(valor: string) {
        this._password = valor
    }

    get favourite(): number[] {
        return this._favourite
    }

    get course(): [] {
        return this._courses
    }

    get state(): boolean {
        return this._state
    }

    set state(valor: boolean) {
        this._state = valor
    }

    login(username: string, password: string): number | undefined {
        if (username == this._username && password == this._password) {
            this._state = true
            return this._id
        }
    }

    logout(): void {
        localStorage.removeItem('user_id')
        window.location.href = "/login.html"
    }

    changeUsername(): void {
        throw new Error("Method not implemented.")
    }

    addFavourite(curso: number) {
        this._favourite.push(curso)
    }

    removeFavourite(id:number) {
        let index: number =  this._favourite.indexOf(id)
        this._favourite.splice(index,1)
    }

}