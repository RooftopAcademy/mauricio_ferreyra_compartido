class Video {
    private _id!: number
    private _duration!: number
    private _video!: string

    get id(): number {
        return this._id
    }

    get duration(): number {
        return this._duration
    }

    get video(): string {
        return this._video
    }
}