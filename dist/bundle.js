(()=>{"use strict";function n(n,e){n&&(n.innerHTML+=e)}function e(n){return Number(n)}var t=function(){function n(){this._courses=[]}return n.prototype.all=function(){return this._courses},n.prototype.add=function(n){this._courses.push(n)},n.prototype.findById=function(n){return this._courses.find((function(e){return e.id==n}))},n}(),a=function(){function n(){}return Object.defineProperty(n.prototype,"id",{get:function(){return this._id},set:function(n){this._id=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"name",{get:function(){return this._name},set:function(n){this._name=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lenguaje",{get:function(){return this._lenguaje},set:function(n){this._lenguaje=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"description",{get:function(){return this._description},set:function(n){this._description=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"level",{get:function(){return this._level},set:function(n){this._level=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"duration",{get:function(){return this._duration},set:function(n){this._duration=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"image",{get:function(){return this._image},set:function(n){this._image=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"price",{get:function(){return this._price},set:function(n){this._price=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"points",{get:function(){return this._poitns},set:function(n){this._poitns=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"views",{get:function(){return this._views},set:function(n){this._views=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"photo_tutor",{get:function(){return this._photo_tutor},set:function(n){this._photo_tutor=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"name_tutor",{get:function(){return this._name_tutor},set:function(n){this._name_tutor=n},enumerable:!1,configurable:!0}),n}(),s=function(){function n(){}return Object.defineProperty(n.prototype,"id",{get:function(){return this._id},set:function(n){this._id=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"username",{get:function(){return this._username},set:function(n){this._username=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"password",{get:function(){return this._password},set:function(n){this._password=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"favourite",{get:function(){return this._favourite},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"course",{get:function(){return this._courses},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"state",{get:function(){return this._state},set:function(n){this._state=n},enumerable:!1,configurable:!0}),n.prototype.login=function(n,e){if(n==this._username&&e==this._password)return this._state=!0,this._id},n.prototype.changeUsername=function(){throw new Error("Method not implemented.")},n}(),i=function(){function n(){this._users=[]}return n.prototype.all=function(){return this._users},n.prototype.add=function(n){this._users.push(n)},n.prototype.findById=function(n){return this._users.find((function(e){return e.id==n}))},n}(),r=function(){function n(){this._users=new i,this._catalog=new t,this._iniciado=!1}return Object.defineProperty(n.prototype,"catalog",{get:function(){return this._catalog},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"user",{get:function(){return this._user},set:function(n){this._user=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"users",{get:function(){return this._users},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"iniciado",{get:function(){return this._iniciado},set:function(n){this._iniciado=n},enumerable:!1,configurable:!0}),n.prototype.fetchUsers=function(){var n=this;[{id:1,username:"usuario",password:"123456",state:!1},{id:2,username:"mauricio",password:"123456",state:!1},{id:3,username:"josejuan",password:"123456",state:!1}].forEach((function(e){var t=new s;t.id=e.id,t.username=e.username,t.password=e.password,t.state=e.state,n._users.add(t)}))},n.prototype.fetchCourses=function(){var n=this,e="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg";[{id:1,name:"The Python Course: build web application",duration:"2h 30m",level:1,points:4.5,views:13245,photo_tutor:e,name_tutor:"Claire Robertson",description:"JavaScript is the popular programming lenguage which powers web pages and web applications. This course will get you started coding in JavaScript.",image:"https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg",languaje:"Python",price:600},{id:2,name:"How to easily create a website with React",duration:"3h 56m",level:0,points:4.5,views:7700,photo_tutor:e,name_tutor:"Morris Mccoy",description:"React is an open source Javascript library designed to create user interfaces with the aim of facilitating application development on a single page.",image:"https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg",languaje:"React",price:600},{id:3,name:"GrapQL: introduction to graphQL for beginners",duration:"2h 46m",level:0,points:4.5,views:9300,photo_tutor:e,name_tutor:"Ted Hawkins",description:"​GraphQL is a data manipulation and query language for APIs, and a runtime environment for querying existing data.",image:"https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg",languaje:"GraphQL",price:600},{id:4,name:"Angular - the complete guide for beginner",duration:"1h 30m",level:0,points:4.5,views:8890,photo_tutor:e,name_tutor:"Claire Robertson",description:"Angular is a web application framework developed in TypeScript, open source, maintained by Google, used to create and maintain single page web applications.",image:"https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg",languaje:"Angular",price:600}].forEach((function(e){var t=new a;t.id=e.id,t.name=e.name,t.duration=e.duration,t.level=e.level,t.points=e.points,t.views=e.views,t.photo_tutor=e.photo_tutor,t.name_tutor=e.name_tutor,t.description=e.description,t.image=e.image,t.lenguaje=e.languaje,t.price=e.price,n._catalog.add(t)}))},n}();var o=new r;o.fetchCourses(),o.fetchUsers();var c=o.users.findById(e(localStorage.getItem("user_id")));c&&(o.user=c);const l=function(){n(document.querySelector(".js-navbar"),'\n    <nav class="navigator">\n        <div class="navigator-conteiner">\n            <a href="index.html">\n                <img class="logo" src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/logo/logo.svg" alt="">\n            </a>\n            \n            <div class="navigator-conteiner-desktop">\n                <ul class="navigator-conteiner-link">\n                    <li>\n                        <a class="nav-link" href="tableUser.html">Users</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Landing</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Pages</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Accounts</a>\n                    </li>\n                    <li>\n                        <a class="nav-link">\n                            <i class="fas fa-ellipsis-h"></i>\n                        </a>\n                    </li>\n                </ul>\n                <form class="form-search">\n                    <span class="lupa">\n                        <i class="text-light-gray-purple fas fa-search"></i>\n                    </span>\n                    <input class="button-search" type="text" placeholder="Search Courses">\n                </form>\n            </div>\n\n        </div>\n        <div class="navigator-conteiner">\n            <ul class="navigator-conteiner-menu">\n                <li class="notification">\n                    <a href="">\n                        <i class="text-light-gray-purple bell far fa-bell"></i>\n                    </a>\n                </li>\n                <li>\n                    <img class="perfil" src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg" width="45" alt="">\n                </li>\n            </ul>\n            <div>\n                <input type="checkbox" id="btn-menu">\n                <label for="btn-menu" class="label-btn-menu">\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </label>\n                <nav class="m">\n                    <ul>\n                        <li class="m-item">\n                            <a class="m-item-link" href="">Home</a>\n                        </li>\n                        <li class="m-item">\n                            <a class="m-item-link" href="">Products</a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n\n        </div>\n    </nav>\n    ');var e=document.querySelector(".js-tbody"),t=document.querySelector(".js-msg-error");!function(){var n,a,s,i;n=this,a=void 0,i=function(){return function(n,e){var t,a,s,i,r={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,a&&(s=2&i[0]?a.return:i[0]?a.throw||((s=a.return)&&s.call(a),0):a.next)&&!(s=s.call(a,i[1])).done)return s;switch(a=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,a=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!((s=(s=r.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){r=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){r.label=i[1];break}if(6===i[0]&&r.label<s[1]){r.label=s[1],s=i;break}if(s&&r.label<s[2]){r.label=s[2],r.ops.push(i);break}s[2]&&r.ops.pop(),r.trys.pop();continue}i=e.call(n,r)}catch(n){i=[6,n],a=0}finally{t=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}(this,(function(n){switch(n.label){case 0:return[4,void fetch("https://jsonplaceholder.typicode.com/users").then((function(n){return n.json()})).then((function(n){return n.forEach((function(n){e&&(e.innerHTML+=function(n){return"\n    <tr>\n        <td>"+n.id+"</td>\n        <td>"+n.username+"</td>\n        <td>"+n.name+"</td>\n        <td>"+n.email+"</td>\n    </tr>\n    "}(n))}))})).catch((function(n){t&&(t.innerHTML='\n    <div class="conteiner-error-msg">\n        <span class="msg-error text-Light-purple">Error en la busqueda, vuelva a intentarlo mas tarde</span>\n    </div>\n    ')}))];case 1:return n.sent(),[2]}}))},new((s=void 0)||(s=Promise))((function(e,t){function r(n){try{c(i.next(n))}catch(n){t(n)}}function o(n){try{c(i.throw(n))}catch(n){t(n)}}function c(n){var t;n.done?e(n.value):(t=n.value,t instanceof s?t:new s((function(n){n(t)}))).then(r,o)}c((i=i.apply(n,a||[])).next())}))}()};!function(t){switch(window.location.pathname){case"/":case"/index.html":!function(){var e=o.catalog.all();n(document.getElementById("inicio"),"Welcome to Geeks UI Learning Application"),n(document.querySelector(".js-navbar"),'\n    <nav class="navigator">\n        <div class="navigator-conteiner">\n            <a href="index.html">\n                <img class="logo" src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/logo/logo.svg" alt="">\n            </a>\n            \n            <div class="navigator-conteiner-desktop">\n                <ul class="navigator-conteiner-link">\n                    <li>\n                        <a class="nav-link" href="tableUser.html">Users</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Landing</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Pages</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Accounts</a>\n                    </li>\n                    <li>\n                        <a class="nav-link">\n                            <i class="fas fa-ellipsis-h"></i>\n                        </a>\n                    </li>\n                </ul>\n                <form class="form-search">\n                    <span class="lupa">\n                        <i class="text-light-gray-purple fas fa-search"></i>\n                    </span>\n                    <input class="button-search" type="text" placeholder="Search Courses">\n                </form>\n            </div>\n\n        </div>\n        <div class="navigator-conteiner">\n            <ul class="navigator-conteiner-menu">\n                <li class="notification">\n                    <a href="">\n                        <i class="text-light-gray-purple bell far fa-bell"></i>\n                    </a>\n                </li>\n                <li>\n                    <img class="perfil" src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg" width="45" alt="">\n                </li>\n            </ul>\n            <div>\n                <input type="checkbox" id="btn-menu">\n                <label for="btn-menu" class="label-btn-menu">\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </label>\n                <nav class="m">\n                    <ul>\n                        <li class="m-item">\n                            <a class="m-item-link" href="">Home</a>\n                        </li>\n                        <li class="m-item">\n                            <a class="m-item-link" href="">Products</a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n\n        </div>\n    </nav>\n    ');var t=document.getElementById("recomended");e.forEach((function(n){t&&(t.innerHTML+=function(n){return'\n    <a class="" href="./detalleProducto.html">\n        <div class="card js-card-course" data-course-id="'+n.id+'">\n            <div>\n                <img class="img-card" src="'+n.image+'" alt="">\n            </div>\n\n            <div class="card-body">\n                <h4 class="text-violet"><a class="card-body-title" href="'+n.description+'">'+n.name+'</a></h4>\n                <div class="text-Light-purple card-body-detail">\n                    <span>\n                        <i class="far fa-clock"></i>\n                    </span>\n                    <p class="card-body-detail-time">'+n.duration+'</p>\n                    <span class="level">\n                        <i class="fas fa-signal"></i>\n                    </span>\n                    <p>'+n.level+'</p>\n                </div>\n                <div>\n                    <span class="estrellas">\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        '+n.points+'\n                    </span> <p class="text-Light-purple" style="margin-top: 15px;">('+n.views+')</p>        \n                </div>\n            </div>\n            <div class="card-footer">\n                <div class="profesor">\n                    <div>\n                        <img src="'+n.photo_tutor+'" width="25" alt="" style="border-radius: 50%;">\n                    </div>\n                    <p>'+n.name_tutor+'</p>\n                </div>\n                <div>\n                    <span>\n                        <i class="far fa-bookmark"></i>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </a>\n    '}(n))})),document.querySelectorAll(".js-card-course").forEach((function(n){n.addEventListener("click",(function(){localStorage.setItem("id_course",this.dataset.courseId)}))}))}();break;case"/detalleProducto.html":!function(){n(document.querySelector(".js-navbar"),'\n    <nav class="navigator">\n        <div class="navigator-conteiner">\n            <a href="index.html">\n                <img class="logo" src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/logo/logo.svg" alt="">\n            </a>\n            \n            <div class="navigator-conteiner-desktop">\n                <ul class="navigator-conteiner-link">\n                    <li>\n                        <a class="nav-link" href="tableUser.html">Users</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Landing</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Pages</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Accounts</a>\n                    </li>\n                    <li>\n                        <a class="nav-link">\n                            <i class="fas fa-ellipsis-h"></i>\n                        </a>\n                    </li>\n                </ul>\n                <form class="form-search">\n                    <span class="lupa">\n                        <i class="text-light-gray-purple fas fa-search"></i>\n                    </span>\n                    <input class="button-search" type="text" placeholder="Search Courses">\n                </form>\n            </div>\n\n        </div>\n        <div class="navigator-conteiner">\n            <ul class="navigator-conteiner-menu">\n                <li class="notification">\n                    <a href="">\n                        <i class="text-light-gray-purple bell far fa-bell"></i>\n                    </a>\n                </li>\n                <li>\n                    <img class="perfil" src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg" width="45" alt="">\n                </li>\n            </ul>\n            <div>\n                <input type="checkbox" id="btn-menu">\n                <label for="btn-menu" class="label-btn-menu">\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </label>\n                <nav class="m">\n                    <ul>\n                        <li class="m-item">\n                            <a class="m-item-link" href="">Home</a>\n                        </li>\n                        <li class="m-item">\n                            <a class="m-item-link" href="">Products</a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n\n        </div>\n    </nav>\n    ');var t=document.querySelectorAll(".theme-conteiner-item");t.forEach((function(n){n.addEventListener("click",(function(e){e.preventDefault(),t.forEach((function(e){e!=n&&e.classList.remove("active")})),n.classList.contains("active")?n.classList.remove("active"):n.classList.add("active")}))}));var a=o.catalog.findById(e(localStorage.getItem("id_course")));n(document.querySelector(".js-head-detail-course"),function(n){return'\n    <div class="inicio">\n        <div class="conteiner-welcome">\n            <h1 class="title">Getting Started with '+n.lenguaje+'</h1>\n            <p class="description">\n                '+n.description+'\n            </p>\n            <div class="description2">\n                <div class="bookmark">\n                    <span>\n                        <i class="icon-grey far fa-bookmark"></i>\n                    </span>\n                    <p class="text-white bookmark-text">Bookmark</p>\n                </div>\n                <div class="view d-flex align-items-center">\n                    <span class="text-white">\n                        <i class="icon-grey far fa-user"></i>\n                        '+n.views+'\n                    </span>\n                    <p class="text-white my-1">Enrolled</p>\n                </div>\n                <div class="stars d-flex align-items-center">\n                    <span class="estrellas">\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                    </span>\n                    <p class="text-white my-1">('+n.points+")</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    "}(a)),n(document.querySelector(".js-body-detail-course"),function(n){return'\n    <div class="conteiner-detalle">\n        <div class="card">\n            <div class="conteiner-img">\n                <img class="img-card" src="'+n.image+'" alt="">\n            </div>\n            <div class="card-body">\n                <p class="price">$600 <span class="price-del">$750</span> </p>\n                <button class="button btn-morado">Srart Free Month</button>\n                <button class="button btn-blanco">Get Full Access</button>\n            </div>\n        </div>\n    </div>\n\n    <div class="card-included">\n        <ul style="padding: 0;">\n            <li class="card-included-item line">\n                <h3 class="card-included-title">What\'s included</h3>\n            </li>\n            <li class="card-included-item line">\n                <span class="card-included-item-icon">\n                    <i class="far fa-play-circle"></i>\n                </span>\n                <p class="card-included-text">12 hours video</p>\n            </li>\n            <li class="card-included-item line">\n                <span class="card-included-item-icon">\n                    <i class="fas fa-award"></i>\n                </span>\n                <p class="card-included-text">Certificate</p>\n            </li>\n            <li class="card-included-item line">\n                <span class="card-included-item-icon">\n                    <i class="far fa-calendar"></i>\n                </span>\n                <p class="card-included-text">12 Article</p>\n            </li>\n            <li class="card-included-item line">\n                <span class="card-included-item-icon">\n                    <i class="fas fa-video"></i>\n                </span>\n                <p class="card-included-text">Watch Offline</p>\n            </li>\n            <li class="card-included-item">\n                <span class="card-included-item-icon">\n                    <i class="far fa-clock"></i>\n                </span>\n                <p class="card-included-text">Lifetime access</p>\n            </li>\n        </ul>\n    </div>\n    '}(a))}();break;case"/login.html":!function(){o.fetchUsers(),console.log(o.users.all());var n=document.getElementById("msg-error"),e=document.getElementById("login"),t=document.querySelector(".js-username"),a=document.querySelector(".js-password");e.addEventListener("submit",(function(e){e.preventDefault(),o.users.all().forEach((function(n){var e;null!=n.login(t.value,a.value)&&(localStorage.setItem("user_id",null===(e=n.login(t.value,a.value))||void 0===e?void 0:e.toString()),window.location.href="/index.html")})),null==n||n.classList.add("active")}))}();break;case"/tableUser.html":l()}}()})();