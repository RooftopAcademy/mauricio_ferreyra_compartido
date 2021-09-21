class Course {
    constructor() {
        this.id = Number
        this.name = String
        this.lenguaje = String
        this.description = String
        this.level = String
        this.duration = Number
        this.image = Number
        this.price = Number
        this.video = new Video
        this.points = Number
        this.views = Number
        this.photo_tutor = String
        this.name_tutor = String
    }

    setId(n) {
        this.id = n
    }

    getId() {
        return this.id
    }

    setName(n) {
        this.name = n
    }

    getName() {
        return this.name
    }

    setLenguaje(n) {
        this.lenguaje = n
    }

    getLenguaje() {
        return this.lenguaje
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

    setViews(n) {
        this.views = n
    }

    getViews(){
        return this.views
    }

    setPhotoTutor(n) {
        this.photo_tutor = n
    }

    getPhotoTutor() {
        return this.photo_tutor
    }

    setNameTutor(n) {
        this.name_tutor = n
    }

    getNameTutor() {
        return this.name_tutor
    }

}