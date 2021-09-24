"use strict";
var Course = (function () {
    function Course() {
    }
    Object.defineProperty(Course.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "lenguaje", {
        get: function () {
            return this._lenguaje;
        },
        set: function (value) {
            this._lenguaje = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (value) {
            this._duration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "points", {
        get: function () {
            return this._poitns;
        },
        set: function (value) {
            this._poitns = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "views", {
        get: function () {
            return this._views;
        },
        set: function (value) {
            this._views = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "photo_tutor", {
        get: function () {
            return this._photo_tutor;
        },
        set: function (value) {
            this._photo_tutor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "name_tutor", {
        get: function () {
            return this._name_tutor;
        },
        set: function (value) {
            this._name_tutor = value;
        },
        enumerable: false,
        configurable: true
    });
    return Course;
}());
