class Store {
    constructor () {
        this.user = new User
        this.catalog = new Catalog
    }

    getCatalog() {
        return this.catalog
    } 

    fetchCourses() {
        let foto = 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
        let foto2 = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg'
        let data = [
            {id: 1, name: 'The Python Course: build web application', duration: '2h 30m', level: 'intermediate', points: '4.5', views: 13.245, photo_tutor: foto, name_tutor: 'Claire Robertson', description: './detalleProducto.html', image: foto2},
            {id: 2, name: 'The Python Course: build web application', duration: '2h 30m', level: 'intermediate', points: '4.5', views: 13.245, photo_tutor: foto, name_tutor: 'Claire Robertson', description: './detalleProducto.html', image: foto2},
            {id: 3, name: 'The Python Course: build web application', duration: '2h 30m', level: 'intermediate', points: '4.5', views: 13.245, photo_tutor: foto, name_tutor: 'Claire Robertson', description: './detalleProducto.html', image: foto2},
            {id: 4, name: 'The Python Course: build web application', duration: '2h 30m', level: 'intermediate', points: '4.5', views: 13.245, photo_tutor: foto, name_tutor: 'Claire Robertson', description: './detalleProducto.html', image: foto2},
        ]

        data.forEach(item => {
            
            let curso = new Course
            curso.setId(item.id)
            curso.setName(item.name)
            curso.setDescription(item.description)
            curso.setLevel(item.level)
            curso.setDuration(item.duration)
            curso.setImage(item.image)
            // curso.setPrice(item.price)
            curso.setViews(item.views)
            curso.setPoints(item.points)
            curso.setPhotoTutor(item.photo_tutor)
            curso.setNameTutor(item.name_tutor)

            this.catalog.add(curso)
        })

    }
}