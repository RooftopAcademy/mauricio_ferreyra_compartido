"use strict";
var Store = (function () {
    function Store() {
    }
    Object.defineProperty(Store.prototype, "catalog", {
        get: function () {
            return this._catalog;
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.fetchCourses = function () {
        var _this = this;
        var foto = 'https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg';
        var python = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg';
        var react = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg';
        var graphQl = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg';
        var angular = 'https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg';
        var data = [
            { id: 1, name: 'The Python Course: build web application', duration: '2h 30m', level: 'intermediate', points: 4.5, views: 13245, photo_tutor: foto, name_tutor: 'Claire Robertson', description: 'JavaScript is the popular programming lenguage which powers web pages and web applications. This course will get you started coding in JavaScript.', image: python, languaje: 'Python', price: 600 },
            { id: 2, name: 'How to easily create a website with React', duration: '3h 56m', level: 'Beginner', points: 4.5, views: 7700, photo_tutor: foto, name_tutor: 'Morris Mccoy', description: 'React is an open source Javascript library designed to create user interfaces with the aim of facilitating application development on a single page.', image: react, languaje: 'React', price: 600 },
            { id: 3, name: 'GrapQL: introduction to graphQL for beginners', duration: '2h 46m', level: 'Beginner', points: 4.5, views: 9300, photo_tutor: foto, name_tutor: 'Ted Hawkins', description: '​GraphQL is a data manipulation and query language for APIs, and a runtime environment for querying existing data.', image: graphQl, languaje: 'GraphQL', price: 600 },
            { id: 4, name: 'Angular - the complete guide for beginner', duration: '1h 30m', level: 'Beginner', points: 4.5, views: 8890, photo_tutor: foto, name_tutor: 'Claire Robertson', description: 'Angular is a web application framework developed in TypeScript, open source, maintained by Google, used to create and maintain single page web applications.', image: angular, languaje: 'Angular', price: 600 },
        ];
        data.forEach(function (item) {
            var curso = new Course;
            curso.id = item.id;
            curso.name = item.name;
            curso.duration = item.duration;
            curso.level = item.level;
            curso.points = item.points;
            curso.views = item.views;
            curso.photo_tutor = item.photo_tutor;
            curso.name_tutor = item.name_tutor;
            curso.description = item.description;
            curso.image = item.image;
            curso.lenguaje = item.languaje;
            curso.price = item.price;
            _this._catalog.add(curso);
        });
    };
    return Store;
}());
