# ABOUT OBJECT HERE

## Requeriments

* Quiero una tienda de cursos <br>
* Que los usuarios puedan ver un listado de cursos
* Que puedan ver los videos de los cursos
* Que puedan guardar el curso
* Que puedan puntuar
* Que los usuarios puedan logearse y cerrar sesion

## Object hierarchy
* Tienda  
    * Usuario 
    * Course 
        * VideoCurso 
    * Listado 

## Clases:

| Course |
| ------- |
| - id: Number <br> - name: String <br> - description: String <br> - level: String <br> - duration: Number <br> - image: String <br> - price: Number <br> - videos: Array <br> - points: Number |
| + getters() <br> + setters() <br> + score(points: Number) -> Number |

---------------

| Video |
|-------|
| - id: Number <br> - duration: Number |
| + getters() <br> + setters() <br> + play() <br> + stop() |

---------------

| User |
|------|
| - id: Number <br> - username: String <br> - password: String <br> - favourites: Array <br> - courses: Array <br> - state: Boolean |
| + getters() <br> + setters() <br> + logout() <br> + login() <br> + addCourse(course: Course) <br> + addFavoutie(course: Course) <br> + removeFavourite(course: Course) |

---------------

| List |
|------|
| - courses: Array |




