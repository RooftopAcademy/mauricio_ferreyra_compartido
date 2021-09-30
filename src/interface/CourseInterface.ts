import level from "../enum/LevelEnum";

export interface CourseInterface {
    _name: string
    _lenguaje: string
    _description: string
    readonly _level: level
    _duration: string
    _image: string
    _price: number
    _poitns: number
    _views: number
}