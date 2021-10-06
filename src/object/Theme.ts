import Video from "./Video"

export default class Theme {
    _id!: number
    _name!: string
    _videoList: Video[] = []

    set id(value: number) {
        this._id = value
    }

    set name(value: string) {
        this._name = value
    }

    get name(): string {
        return this._name
    }

    add(video: Video) {
        this._videoList.push(video)
    }
}