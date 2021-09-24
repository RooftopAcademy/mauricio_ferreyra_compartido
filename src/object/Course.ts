class Course {
    private _id!: number
    private _name!: string
    private _lenguaje!: string
    private _description!: string
    private _level!: string
    private _duration!: string
    private _image!: string
    private _price!: number
    private _video!: Video
    private _poitns!: number
    private _views!: number
    private _photo_tutor!: string
    private _name_tutor!: string

    constructor() {
        
    }

    set id(value:number) {
        this._id = value
    }

    get id(){
        return this._id
    }

    set name(value: string) {
        this._name = value
    }

    get name() {
        return this._name
    }

    set lenguaje(value: string) {
        this._lenguaje = value
    }

    get lenguaje() {
        return this._lenguaje
    }

    set description(value: string) {
        this._description = value
    }

    get description() {
        return this._description
    }

    set level(value: string) {
        this._level = value
    }
    
    get level() {
        return this._level
    }

    set duration(value: string) {
        this._duration = value
    }

    get duration() {
        return this._duration
    }

    set image(value: string) {
        this._image = value
    }

    get image() {
        return this._image
    }

    set price(value: number) {
        this._price = value
    }

    get price() {
        return this._price
    }

    set points(value: number) {
        this._poitns = value
    }

    get points() {
        return this._poitns
    }

    set views(value: number) {
        this._views = value
    }

    get views() {
        return this._views
    }

    set photo_tutor(value: string) {
        this._photo_tutor = value
    }

    get photo_tutor() {
        return this._photo_tutor
    }

    set name_tutor(value: string) {
        this._name_tutor = value
    }

    get name_tutor() {
        return this._name_tutor
    }

}