class Video implements VideoInterface {
    
    private _id!: number
    _duration!: number
    _video!: string

    get id(): number {
        return this._id
    }

    get duration(): number {
        return this._duration
    }

    get video(): string {
        return this._video
    }

    play(): void {
        throw new Error("Method not implemented.")
    }
}