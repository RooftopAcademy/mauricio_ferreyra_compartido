import Video from "./Video"

export default class Theme {
    _id!: number
    _name!: string
    _videoList: Video[] = []

    set id(value: number) {
        this._id = value
    }

    get id(): number {
        return this._id
    }

    set name(value: string) {
        this._name = value
    }

    get name(): string {
        return this._name
    }

    get videoList() {
        return this._videoList
    }

    add(video: Video) {
        this._videoList.push(video)
    }
}