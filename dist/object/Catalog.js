"use strict";
var Catalog = (function () {
    function Catalog() {
    }
    Catalog.prototype.all = function () {
        return this._courses;
    };
    Catalog.prototype.add = function (curso) {
        this._courses.push(curso);
    };
    Catalog.prototype.findById = function (id) {
        return this._courses.find(function (course) {
            return course.id == id;
        });
    };
    return Catalog;
}());
