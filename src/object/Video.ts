export default class Video implements VideoInterface {
    
    private _id!: number
    _duration!: number
    _name!: string
    _video!: string

    get id(): number {
        return this._id
    }

    set id(value: number) {
        this._id = value
    }

    get duration(): number {
        return this._duration
    }

    set name(value: string) {
        this._name = value
    }

    get name(): string{
        return this._name
    }

    get video(): string {
        return this._video
    }

    set video(value: string) {
        this._video = value
    }

    play(): void {
        throw new Error("Method not implemented.")
    }
}