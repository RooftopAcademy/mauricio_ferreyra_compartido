class User implements UserInterface {
    
    private _id!: number
    _username!: string
    _password!: string
    private _favourite!: []
    private _courses!: []
    private _state!: boolean

    get id(): number {
        return this._id
    }

    get username(): string {
        return this._username
    }

    get password(): string {
        return this._password
    }

    get favourite(): [] {
        return this._favourite
    }

    get course(): [] {
        return this._courses
    }

    get state(): boolean {
        return this._state
    }

    login(): void {
        throw new Error("Method not implemented.")
    }
    changeUsername(): void {
        throw new Error("Method not implemented.")
    }
}