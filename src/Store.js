class Store {
    constructor () {
        this.user = new User
        this.courses = new Catalog
    }

    fetchCourses() {
        let foto = 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
        let foto2 = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg'
        let courses = [
            {title: 'The Python Course: build web application', time: '2h 30m', level: 'intermediate', stars: '4.5', view: 13.245, photo_tutor: foto, name_tutor: 'Claire Robertson', detalle: './detalleProducto.html', image: foto2},
            {title: 'The Python Course: build web application', time: '2h 30m', level: 'intermediate', stars: '4.5', view: 13.245, photo_tutor: foto, name_tutor: 'Claire Robertson', detalle: './detalleProducto.html', image: foto2},
            {title: 'The Python Course: build web application', time: '2h 30m', level: 'intermediate', stars: '4.5', view: 13.245, photo_tutor: foto, name_tutor: 'Claire Robertson', detalle: './detalleProducto.html', image: foto2},
            {title: 'The Python Course: build web application', time: '2h 30m', level: 'intermediate', stars: '4.5', view: 13.245, photo_tutor: foto, name_tutor: 'Claire Robertson', detalle: './detalleProducto.html', image: foto2},
        ]

        courses.forEach((course) => {
            

        })

        // this.id = Number
        // this.name = String
        // this.description = String
        // this.level = String
        // this.duration = Number
        // this.image = Number
        // this.price = Number
        // this.video = new Video
        // this.points = Number

        this.courses.add(new Course)
        this.courses.add(new Course)
        this.courses.add(new Course)
        console.log('store')
    }
}