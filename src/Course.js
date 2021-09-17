class Course {
    constructor() {
        this.id = Number
        this.name = String
        this.description = String
        this.level = String
        this.duration = Number
        this.image = Number
        this.price = Number
        this.video = new Video
        this.points = Number
    }

    setName(n) {
        this.name = n
    }

    getName() {
        return this.name
    }

    setDescription(n) {
        this.description = n
    }

    getDescription() {
        return this.description
    }

    setLevel(n) {
        this.level = n
    }

    getLevel() {
        return this.level
    }

    setDuration(n) {
        this.duration = n
    }

    getDuration() {
        return this.duration
    }

    setImage(n) {
        this.image = n
    }

    getImage() {
        return this.image
    }

    setPrice(n) {
        this.price = n
    }

    getPrice() {
        return this.price
    }

    setPoints(n) {
        this.points = n
    }

    getPoints() {
        return this.points
    }

    setVideo(n) {
        this.video = n
    }

    getVideo() {
        return this.video
    }

}