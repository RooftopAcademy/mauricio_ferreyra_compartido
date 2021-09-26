export class Course implements CourseInterface {
    private _id!: number
    _name!: string
    _lenguaje!: string
    _description!: string
    _level!: level
    _duration!: string
    _image!: string
    _price!: number
    _poitns!: number
    _views!: number
    private _video!: Video
    private _photo_tutor!: string
    private _name_tutor!: string

    constructor() {
        
    }

    set id(value:number) {
        this._id = value
    }

    get id(): number{
        return this._id
    }

    set name(value: string) {
        this._name = value
    }

    get name(): string {
        return this._name
    }

    set lenguaje(value: string) {
        this._lenguaje = value
    }

    get lenguaje(): string {
        return this._lenguaje
    }

    set description(value: string) {
        this._description = value
    }

    get description(): string {
        return this._description
    }

    set level(value: level) {
        this._level = value
    }
    
    get level(): level {
        return this._level
    }

    set duration(value: string) {
        this._duration = value
    }

    get duration(): string {
        return this._duration
    }

    set image(value: string) {
        this._image = value
    }

    get image(): string {
        return this._image
    }

    set price(value: number) {
        this._price = value
    }

    get price(): number {
        return this._price
    }

    set points(value: number) {
        this._poitns = value
    }

    get points(): number {
        return this._poitns
    }

    set views(value: number) {
        this._views = value
    }

    get views(): number {
        return this._views
    }

    set photo_tutor(value: string) {
        this._photo_tutor = value
    }

    get photo_tutor(): string {
        return this._photo_tutor
    }

    set name_tutor(value: string) {
        this._name_tutor = value
    }

    get name_tutor(): string {
        return this._name_tutor
    }

}