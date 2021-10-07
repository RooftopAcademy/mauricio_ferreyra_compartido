import level from "../enum/LevelEnum"
import elementProduct from "../types/elementProduct"

let foto:string = 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
let python:string = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg'
let react:string = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg'
let graphQl:string = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg'
let angular:string = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg'

let dataCourse:elementProduct[] = [
    {
        id: 1, name: 'The Python Course: build web application', 
        duration: '2h 30m', level: level.intermediate, 
        points: 4.5, views: 13245, photo_tutor: foto, name_tutor: 'Claire Robertson',
        description: 'JavaScript is the popular programming lenguage which powers web pages and web applications. This course will get you started coding in JavaScript.',
        image: python, languaje: 'Python', price: 600,
        theme: [
            {
                id: 1,
                name: "Introduction to Python",
                video: [
                    {
                        id: 1,
                        name: "Introduction",
                        url: "https://www.youtube.com/embed/chPhlsHoEPo"
                    },
                    {
                        id: 2,
                        name: "Installing Development Software",
                        url: "https://www.youtube.com/embed/chPhlsHoEPo"
                    },
                    {
                        id: 3,
                        name: "Hello world Project from GitHub",
                        url: "https://www.youtube.com/embed/chPhlsHoEPo"
                    },
                ],
            },
            {
                id: 2,
                name: "Python Beggining",
                video: [
                    {
                        id: 4,
                        name: "Introduction",
                        url: "https://www.youtube.com/embed/chPhlsHoEPo"
                    },
                    {
                        id: 5,
                        name: "Variable with Python",
                        url: "https://www.youtube.com/embed/chPhlsHoEPo"
                    },
                    {
                        id: 6,
                        name: "Hello world Project from GitHub",
                        url: "https://www.youtube.com/embed/chPhlsHoEPo"
                    },
                ]
            }
        ],
    },
    {
        id: 2, name: 'How to easily create a website with React', 
        duration: '3h 56m', level: level.begginer, 
        points: 4.5, views: 7700, photo_tutor: foto, name_tutor: 'Morris Mccoy', 
        description: 'React is an open source Javascript library designed to create user interfaces with the aim of facilitating application development on a single page.', 
        image: react, languaje: 'React', price: 600,
        theme: [
            {
                id: 1,
                name: "tema1",
                video: [
                    {
                        id: 7,
                        name: "video",
                        url: "video"
                    }
                ]
            }
        ],
    },
    {
        id: 3, name: 'GrapQL: introduction to graphQL for beginners', 
        duration: '2h 46m', level: level.begginer, 
        points: 4.5, views: 9300, photo_tutor: foto, name_tutor: 'Ted Hawkins', 
        description: '​GraphQL is a data manipulation and query language for APIs, and a runtime environment for querying existing data.', 
        image: graphQl, languaje: 'GraphQL', price: 600,
        theme: [
            {
                id: 1,
                name: "tema1",
                video: [
                    {
                        id: 8,
                        name: "video",
                        url: "video"
                    }
                ]
            }
        ],
    },
    {
        id: 4, name: 'Angular - the complete guide for beginner',
        duration: '1h 30m', level: level.begginer, 
        points: 4.5, views: 8890, photo_tutor: foto, name_tutor: 'Claire Robertson', 
        description: 'Angular is a web application framework developed in TypeScript, open source, maintained by Google, used to create and maintain single page web applications.', 
        image: angular, languaje: 'Angular', price: 600,
        theme: [
            {
                id: 1,
                name: "tema1",
                video: [
                    {
                        id: 9,
                        name: "video",
                        url: "video"
                    }
                ]
            }
        ],
    },
]

export default dataCourse