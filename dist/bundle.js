(()=>{"use strict";function n(n,e){n&&(n.innerHTML+=e)}var e=function(){function n(){this._courses=[]}return n.prototype.all=function(){return this._courses},n.prototype.add=function(n){this._courses.push(n)},n.prototype.findById=function(n){return this._courses.find((function(e){return e.id==n}))},n}(),a=function(){function n(){}return Object.defineProperty(n.prototype,"id",{get:function(){return this._id},set:function(n){this._id=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"name",{get:function(){return this._name},set:function(n){this._name=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lenguaje",{get:function(){return this._lenguaje},set:function(n){this._lenguaje=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"description",{get:function(){return this._description},set:function(n){this._description=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"level",{get:function(){return this._level},set:function(n){this._level=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"duration",{get:function(){return this._duration},set:function(n){this._duration=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"image",{get:function(){return this._image},set:function(n){this._image=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"price",{get:function(){return this._price},set:function(n){this._price=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"points",{get:function(){return this._poitns},set:function(n){this._poitns=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"views",{get:function(){return this._views},set:function(n){this._views=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"photo_tutor",{get:function(){return this._photo_tutor},set:function(n){this._photo_tutor=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"name_tutor",{get:function(){return this._name_tutor},set:function(n){this._name_tutor=n},enumerable:!1,configurable:!0}),n}(),t=function(){function n(){this._catalog=new e}return Object.defineProperty(n.prototype,"catalog",{get:function(){return this._catalog},enumerable:!1,configurable:!0}),n.prototype.fetchCourses=function(){var n=this,e="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg";[{id:1,name:"The Python Course: build web application",duration:"2h 30m",level:"intermediate",points:4.5,views:13245,photo_tutor:e,name_tutor:"Claire Robertson",description:"JavaScript is the popular programming lenguage which powers web pages and web applications. This course will get you started coding in JavaScript.",image:"https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg",languaje:"Python",price:600},{id:2,name:"How to easily create a website with React",duration:"3h 56m",level:"Beginner",points:4.5,views:7700,photo_tutor:e,name_tutor:"Morris Mccoy",description:"React is an open source Javascript library designed to create user interfaces with the aim of facilitating application development on a single page.",image:"https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg",languaje:"React",price:600},{id:3,name:"GrapQL: introduction to graphQL for beginners",duration:"2h 46m",level:"Beginner",points:4.5,views:9300,photo_tutor:e,name_tutor:"Ted Hawkins",description:"​GraphQL is a data manipulation and query language for APIs, and a runtime environment for querying existing data.",image:"https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg",languaje:"GraphQL",price:600},{id:4,name:"Angular - the complete guide for beginner",duration:"1h 30m",level:"Beginner",points:4.5,views:8890,photo_tutor:e,name_tutor:"Claire Robertson",description:"Angular is a web application framework developed in TypeScript, open source, maintained by Google, used to create and maintain single page web applications.",image:"https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg",languaje:"Angular",price:600}].forEach((function(e){var t=new a;t.id=e.id,t.name=e.name,t.duration=e.duration,t.level=e.level,t.points=e.points,t.views=e.views,t.photo_tutor=e.photo_tutor,t.name_tutor=e.name_tutor,t.description=e.description,t.image=e.image,t.lenguaje=e.languaje,t.price=e.price,n._catalog.add(t)}))},n}();var i=new t;i.fetchCourses();!function(e){switch(window.location.pathname){case"/":case"/index.html":!function(){var e=i.catalog.all();n(document.getElementById("inicio"),"Welcome to Geeks UI Learning Application"),n(document.querySelector(".js-navbar"),'\n    <nav class="navigator">\n        <div class="navigator-conteiner">\n            <a href="index.html">\n                <img class="logo" src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/logo/logo.svg" alt="">\n            </a>\n            \n            <div class="navigator-conteiner-desktop">\n                <ul class="navigator-conteiner-link">\n                    <li>\n                        <a class="nav-link" href="tableUser.html">Users</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Landing</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Pages</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Accounts</a>\n                    </li>\n                    <li>\n                        <a class="nav-link">\n                            <i class="fas fa-ellipsis-h"></i>\n                        </a>\n                    </li>\n                </ul>\n                <form class="form-search">\n                    <span class="lupa">\n                        <i class="text-light-gray-purple fas fa-search"></i>\n                    </span>\n                    <input class="button-search" type="text" placeholder="Search Courses">\n                </form>\n            </div>\n\n        </div>\n        <div class="navigator-conteiner">\n            <ul class="navigator-conteiner-menu">\n                <li class="notification">\n                    <a href="">\n                        <i class="text-light-gray-purple bell far fa-bell"></i>\n                    </a>\n                </li>\n                <li>\n                    <img class="perfil" src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg" width="45" alt="">\n                </li>\n            </ul>\n            <div>\n                <input type="checkbox" id="btn-menu">\n                <label for="btn-menu" class="label-btn-menu">\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </label>\n                <nav class="m">\n                    <ul>\n                        <li class="m-item">\n                            <a class="m-item-link" href="">Home</a>\n                        </li>\n                        <li class="m-item">\n                            <a class="m-item-link" href="">Products</a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n\n        </div>\n    </nav>\n    ');var a=document.getElementById("recomended");e.forEach((function(n){a&&(a.innerHTML+=function(n){return'\n    <a class="" href="./detalleProducto.html">\n        <div class="card js-card-course" data-course-id="'+n.id+'">\n            <div>\n                <img class="img-card" src="'+n.image+'" alt="">\n            </div>\n\n            <div class="card-body">\n                <h4 class="text-violet"><a class="card-body-title" href="'+n.description+'">'+n.name+'</a></h4>\n                <div class="text-Light-purple card-body-detail">\n                    <span>\n                        <i class="far fa-clock"></i>\n                    </span>\n                    <p class="card-body-detail-time">'+n.duration+'</p>\n                    <span class="level">\n                        <i class="fas fa-signal"></i>\n                    </span>\n                    <p>'+n.level+'</p>\n                </div>\n                <div>\n                    <span class="estrellas">\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        '+n.points+'\n                    </span> <p class="text-Light-purple" style="margin-top: 15px;">('+n.views+')</p>        \n                </div>\n            </div>\n            <div class="card-footer">\n                <div class="profesor">\n                    <div>\n                        <img src="'+n.photo_tutor+'" width="25" alt="" style="border-radius: 50%;">\n                    </div>\n                    <p>'+n.name_tutor+'</p>\n                </div>\n                <div>\n                    <span>\n                        <i class="far fa-bookmark"></i>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </a>\n    '}(n))})),document.querySelectorAll(".js-card-course").forEach((function(n){n.addEventListener("click",(function(){localStorage.setItem("id_course",this.dataset.courseId)}))}))}();break;case"/detalleProducto.html":!function(){n(document.querySelector(".js-navbar"),'\n    <nav class="navigator">\n        <div class="navigator-conteiner">\n            <a href="index.html">\n                <img class="logo" src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/logo/logo.svg" alt="">\n            </a>\n            \n            <div class="navigator-conteiner-desktop">\n                <ul class="navigator-conteiner-link">\n                    <li>\n                        <a class="nav-link" href="tableUser.html">Users</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Landing</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Pages</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Accounts</a>\n                    </li>\n                    <li>\n                        <a class="nav-link">\n                            <i class="fas fa-ellipsis-h"></i>\n                        </a>\n                    </li>\n                </ul>\n                <form class="form-search">\n                    <span class="lupa">\n                        <i class="text-light-gray-purple fas fa-search"></i>\n                    </span>\n                    <input class="button-search" type="text" placeholder="Search Courses">\n                </form>\n            </div>\n\n        </div>\n        <div class="navigator-conteiner">\n            <ul class="navigator-conteiner-menu">\n                <li class="notification">\n                    <a href="">\n                        <i class="text-light-gray-purple bell far fa-bell"></i>\n                    </a>\n                </li>\n                <li>\n                    <img class="perfil" src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg" width="45" alt="">\n                </li>\n            </ul>\n            <div>\n                <input type="checkbox" id="btn-menu">\n                <label for="btn-menu" class="label-btn-menu">\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </label>\n                <nav class="m">\n                    <ul>\n                        <li class="m-item">\n                            <a class="m-item-link" href="">Home</a>\n                        </li>\n                        <li class="m-item">\n                            <a class="m-item-link" href="">Products</a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n\n        </div>\n    </nav>\n    ');var e=document.querySelectorAll(".theme-conteiner-item");e.forEach((function(n){n.addEventListener("click",(function(a){a.preventDefault(),e.forEach((function(e){e!=n&&e.classList.remove("active")})),n.classList.contains("active")?n.classList.remove("active"):n.classList.add("active")}))}));var a,t=i.catalog.findById((a=localStorage.getItem("id_course"),Number(a)));n(document.querySelector(".js-head-detail-course"),function(n){return'\n    <div class="inicio">\n        <div class="conteiner-welcome">\n            <h1 class="title">Getting Started with '+n.lenguaje+'</h1>\n            <p class="description">\n                '+n.description+'\n            </p>\n            <div class="description2">\n                <div class="bookmark">\n                    <span>\n                        <i class="icon-grey far fa-bookmark"></i>\n                    </span>\n                    <p class="text-white bookmark-text">Bookmark</p>\n                </div>\n                <div class="view d-flex align-items-center">\n                    <span class="text-white">\n                        <i class="icon-grey far fa-user"></i>\n                        '+n.views+'\n                    </span>\n                    <p class="text-white my-1">Enrolled</p>\n                </div>\n                <div class="stars d-flex align-items-center">\n                    <span class="estrellas">\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                    </span>\n                    <p class="text-white my-1">('+n.points+")</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    "}(t)),n(document.querySelector(".js-head-detail-course"),function(n){return'\n    <div class="conteiner-detalle">\n        <div class="card">\n            <div class="conteiner-img">\n                <img class="img-card" src="'+n.image+'" alt="">\n            </div>\n            <div class="card-body">\n                <p class="price">$600 <span class="price-del">$750</span> </p>\n                <button class="button btn-morado">Srart Free Month</button>\n                <button class="button btn-blanco">Get Full Access</button>\n            </div>\n        </div>\n    </div>\n\n    <div class="card-included">\n        <ul style="padding: 0;">\n            <li class="card-included-item line">\n                <h3 class="card-included-title">What\'s included</h3>\n            </li>\n            <li class="card-included-item line">\n                <span class="card-included-item-icon">\n                    <i class="far fa-play-circle"></i>\n                </span>\n                <p class="card-included-text">12 hours video</p>\n            </li>\n            <li class="card-included-item line">\n                <span class="card-included-item-icon">\n                    <i class="fas fa-award"></i>\n                </span>\n                <p class="card-included-text">Certificate</p>\n            </li>\n            <li class="card-included-item line">\n                <span class="card-included-item-icon">\n                    <i class="far fa-calendar"></i>\n                </span>\n                <p class="card-included-text">12 Article</p>\n            </li>\n            <li class="card-included-item line">\n                <span class="card-included-item-icon">\n                    <i class="fas fa-video"></i>\n                </span>\n                <p class="card-included-text">Watch Offline</p>\n            </li>\n            <li class="card-included-item">\n                <span class="card-included-item-icon">\n                    <i class="far fa-clock"></i>\n                </span>\n                <p class="card-included-text">Lifetime access</p>\n            </li>\n        </ul>\n    </div>\n    '}(t))}()}}()})();