(()=>{"use strict";function e(e,n){e&&(e.innerHTML+=n)}function n(e){return Number(e)}var t=function(){function e(){this._courses=[]}return e.prototype.all=function(){return this._courses},e.prototype.add=function(e){this._courses.push(e)},e.prototype.findById=function(e){return this._courses.find((function(n){return n.id==e}))},e}(),i=function(){function e(){}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},set:function(e){this._id=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(e){this._name=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lenguaje",{get:function(){return this._lenguaje},set:function(e){this._lenguaje=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"description",{get:function(){return this._description},set:function(e){this._description=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"level",{get:function(){return this._level},set:function(e){this._level=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"duration",{get:function(){return this._duration},set:function(e){this._duration=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"image",{get:function(){return this._image},set:function(e){this._image=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"price",{get:function(){return this._price},set:function(e){this._price=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"points",{get:function(){return this._poitns},set:function(e){this._poitns=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"views",{get:function(){return this._views},set:function(e){this._views=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"photo_tutor",{get:function(){return this._photo_tutor},set:function(e){this._photo_tutor=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name_tutor",{get:function(){return this._name_tutor},set:function(e){this._name_tutor=e},enumerable:!1,configurable:!0}),e}(),a=function(){function e(){}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},set:function(e){this._id=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"username",{get:function(){return this._username},set:function(e){this._username=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"password",{get:function(){return this._password},set:function(e){this._password=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"favourite",{get:function(){return this._favourite},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"course",{get:function(){return this._courses},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},set:function(e){this._state=e},enumerable:!1,configurable:!0}),e.prototype.login=function(e,n){if(e==this._username&&n==this._password)return this._state=!0,this._id},e.prototype.logout=function(){localStorage.removeItem("user_id"),window.location.href="/login.html"},e.prototype.changeUsername=function(){throw new Error("Method not implemented.")},e}(),s=function(){function e(){this._users=[]}return e.prototype.all=function(){return this._users},e.prototype.add=function(e){this._users.push(e)},e.prototype.findById=function(e){return this._users.find((function(n){return n.id==e}))},e}(),r=function(){function e(){this._users=new s,this._catalog=new t,this._iniciado=!1}return Object.defineProperty(e.prototype,"catalog",{get:function(){return this._catalog},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"user",{get:function(){return this._user},set:function(e){this._user=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"users",{get:function(){return this._users},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"iniciado",{get:function(){return this._iniciado},set:function(e){this._iniciado=e},enumerable:!1,configurable:!0}),e.prototype.fetchUsers=function(){var e=this;[{id:1,username:"usuario",password:"123456",state:!1},{id:2,username:"mauricio",password:"123456",state:!1},{id:3,username:"josejuan",password:"123456",state:!1}].forEach((function(n){var t=new a;t.id=n.id,t.username=n.username,t.password=n.password,t.state=n.state,e._users.add(t)}))},e.prototype.fetchCourses=function(){var e=this,n="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg";[{id:1,name:"The Python Course: build web application",duration:"2h 30m",level:1,points:4.5,views:13245,photo_tutor:n,name_tutor:"Claire Robertson",description:"JavaScript is the popular programming lenguage which powers web pages and web applications. This course will get you started coding in JavaScript.",image:"https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg",languaje:"Python",price:600},{id:2,name:"How to easily create a website with React",duration:"3h 56m",level:0,points:4.5,views:7700,photo_tutor:n,name_tutor:"Morris Mccoy",description:"React is an open source Javascript library designed to create user interfaces with the aim of facilitating application development on a single page.",image:"https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg",languaje:"React",price:600},{id:3,name:"GrapQL: introduction to graphQL for beginners",duration:"2h 46m",level:0,points:4.5,views:9300,photo_tutor:n,name_tutor:"Ted Hawkins",description:"​GraphQL is a data manipulation and query language for APIs, and a runtime environment for querying existing data.",image:"https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg",languaje:"GraphQL",price:600},{id:4,name:"Angular - the complete guide for beginner",duration:"1h 30m",level:0,points:4.5,views:8890,photo_tutor:n,name_tutor:"Claire Robertson",description:"Angular is a web application framework developed in TypeScript, open source, maintained by Google, used to create and maintain single page web applications.",image:"https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg",languaje:"Angular",price:600}].forEach((function(n){var t=new i;t.id=n.id,t.name=n.name,t.duration=n.duration,t.level=n.level,t.points=n.points,t.views=n.views,t.photo_tutor=n.photo_tutor,t.name_tutor=n.name_tutor,t.description=n.description,t.image=n.image,t.lenguaje=n.languaje,t.price=n.price,e._catalog.add(t)}))},e}();const o=function(e){return'\n    <nav class="navigator">\n        <div class="navigator-conteiner">\n            <a href="index.html">\n                <img class="logo" src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/logo/logo.svg" alt="">\n            </a>\n            \n            <div class="navigator-conteiner-desktop">\n                <ul class="navigator-conteiner-link">\n                    <li>\n                        <a class="nav-link" href="tableUser.html">Users</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Landing</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Pages</a>\n                    </li>\n                    <li>\n                        <a href="#" class="nav-link">Accounts</a>\n                    </li>\n                    <li>\n                        <a class="nav-link">\n                            <i class="fas fa-ellipsis-h"></i>\n                        </a>\n                    </li>\n                </ul>\n                <form class="form-search">\n                    <span class="lupa">\n                        <i class="text-light-gray-purple fas fa-search"></i>\n                    </span>\n                    <input class="button-search" type="text" placeholder="Search Courses">\n                </form>\n            </div>\n\n        </div>\n        <div class="navigator-conteiner">\n            <ul class="navigator-conteiner-menu">\n                <li class="notification">\n                    <a href="">\n                        <i class="text-light-gray-purple bell far fa-bell"></i>\n                    </a>\n                </li>\n                <li>\n                    <div class="dropdown">\n                        <button class="dropbtn js-btn-perfil">\n                            <img class="perfil" src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg" width="45" alt="">\n                        </button>\n                        <div class="dropdown-content">\n                            <a href="#" class="nav-link dropdow-item">'+e+'</a>\n                            <a id="logout" href="#" class="nav-link dropdow-item">Logout</a>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <div>\n                <input type="checkbox" id="btn-menu">\n                <label for="btn-menu" class="label-btn-menu">\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </label>\n                <nav class="m">\n                    <ul>\n                        <li class="m-item">\n                            <a class="m-item-link" href="">Home</a>\n                        </li>\n                        <li class="m-item">\n                            <a class="m-item-link" href="">Products</a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n\n        </div>\n    </nav>\n    '};var c=new r;c.fetchCourses(),c.fetchUsers();var l=c.users.findById(n(localStorage.getItem("user_id")));l&&(c.user=l);const u=function(){e(document.querySelector(".js-navbar"),o(c.user.username)),document.querySelector(".js-btn-perfil").addEventListener("click",(function(){console.log(this),this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}));var n=document.querySelector(".js-tbody"),t=document.querySelector(".js-msg-error");!function(){var e,i,a,s;e=this,i=void 0,s=function(){return function(e,n){var t,i,a,s,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,i&&(a=2&s[0]?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,i=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!((a=(a=r.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){r=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(6===s[0]&&r.label<a[1]){r.label=a[1],a=s;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(s);break}a[2]&&r.ops.pop(),r.trys.pop();continue}s=n.call(e,r)}catch(e){s=[6,e],i=0}finally{t=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}(this,(function(e){switch(e.label){case 0:return[4,void fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return e.forEach((function(e){n&&(n.innerHTML+=function(e){return"\n    <tr>\n        <td>"+e.id+"</td>\n        <td>"+e.username+"</td>\n        <td>"+e.name+"</td>\n        <td>"+e.email+"</td>\n    </tr>\n    "}(e))}))})).catch((function(e){t&&(t.innerHTML='\n    <div class="conteiner-error-msg">\n        <span class="msg-error text-Light-purple">Error en la busqueda, vuelva a intentarlo mas tarde</span>\n    </div>\n    ')}))];case 1:return e.sent(),[2]}}))},new((a=void 0)||(a=Promise))((function(n,t){function r(e){try{c(s.next(e))}catch(e){t(e)}}function o(e){try{c(s.throw(e))}catch(e){t(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,o)}c((s=s.apply(e,i||[])).next())}))}()};!function(t){switch(window.location.pathname){case"/":case"/index.html":!function(){var n=c.catalog.all();e(document.getElementById("inicio"),"Welcome to Geeks UI Learning Application"),e(document.querySelector(".js-navbar"),o(c.user.username)),document.querySelector(".js-btn-perfil").addEventListener("click",(function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")})),document.querySelector("#logout").addEventListener("click",(function(){return c.user.logout()}));var t=document.getElementById("recomended");n.forEach((function(e){t&&(t.innerHTML+=function(e){return'\n    <a class="" href="./detalleProducto.html">\n        <div class="card js-card-course" data-course-id="'+e.id+'">\n            <div>\n                <img class="img-card" src="'+e.image+'" alt="">\n            </div>\n\n            <div class="card-body">\n                <h4 class="text-violet"><a class="card-body-title" href="'+e.description+'">'+e.name+'</a></h4>\n                <div class="text-Light-purple card-body-detail">\n                    <span>\n                        <i class="far fa-clock"></i>\n                    </span>\n                    <p class="card-body-detail-time">'+e.duration+'</p>\n                    <span class="level">\n                        <i class="fas fa-signal"></i>\n                    </span>\n                    <p>'+e.level+'</p>\n                </div>\n                <div>\n                    <span class="estrellas">\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        '+e.points+'\n                    </span> <p class="text-Light-purple" style="margin-top: 15px;">('+e.views+')</p>        \n                </div>\n            </div>\n            <div class="card-footer">\n                <div class="profesor">\n                    <div>\n                        <img src="'+e.photo_tutor+'" width="25" alt="" style="border-radius: 50%;">\n                    </div>\n                    <p>'+e.name_tutor+'</p>\n                </div>\n                <div>\n                    <span>\n                        <i class="far fa-bookmark"></i>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </a>\n    '}(e))})),document.querySelectorAll(".js-card-course").forEach((function(e){e.addEventListener("click",(function(){localStorage.setItem("id_course",this.dataset.courseId)}))}))}();break;case"/detalleProducto.html":!function(){e(document.querySelector(".js-navbar"),o(c.user.username)),document.querySelector(".js-btn-perfil").addEventListener("click",(function(){console.log(this),this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}));var t=document.querySelectorAll(".theme-conteiner-item");t.forEach((function(e){e.addEventListener("click",(function(n){n.preventDefault(),t.forEach((function(n){n!=e&&n.classList.remove("active")})),e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}))}));var i=c.catalog.findById(n(localStorage.getItem("id_course")));e(document.querySelector(".js-head-detail-course"),function(e){return'\n    <div class="inicio">\n        <div class="conteiner-welcome">\n            <h1 class="title">Getting Started with '+e.lenguaje+'</h1>\n            <p class="description">\n                '+e.description+'\n            </p>\n            <div class="description2">\n                <div class="bookmark">\n                    <span>\n                        <i class="icon-grey far fa-bookmark"></i>\n                    </span>\n                    <p class="text-white bookmark-text">Bookmark</p>\n                </div>\n                <div class="view d-flex align-items-center">\n                    <span class="text-white">\n                        <i class="icon-grey far fa-user"></i>\n                        '+e.views+'\n                    </span>\n                    <p class="text-white my-1">Enrolled</p>\n                </div>\n                <div class="stars d-flex align-items-center">\n                    <span class="estrellas">\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                        <i class="fas fa-star"></i>\n                    </span>\n                    <p class="text-white my-1">('+e.points+")</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    "}(i)),e(document.querySelector(".js-body-detail-course"),function(e){return'\n    <div class="conteiner-detalle">\n        <div class="card">\n            <div class="conteiner-img">\n                <img class="img-card" src="'+e.image+'" alt="">\n            </div>\n            <div class="card-body">\n                <p class="price">$600 <span class="price-del">$750</span> </p>\n                <button class="button btn-morado">Srart Free Month</button>\n                <button class="button btn-blanco">Get Full Access</button>\n            </div>\n        </div>\n    </div>\n\n    <div class="card-included">\n        <ul style="padding: 0;">\n            <li class="card-included-item line">\n                <h3 class="card-included-title">What\'s included</h3>\n            </li>\n            <li class="card-included-item line">\n                <span class="card-included-item-icon">\n                    <i class="far fa-play-circle"></i>\n                </span>\n                <p class="card-included-text">12 hours video</p>\n            </li>\n            <li class="card-included-item line">\n                <span class="card-included-item-icon">\n                    <i class="fas fa-award"></i>\n                </span>\n                <p class="card-included-text">Certificate</p>\n            </li>\n            <li class="card-included-item line">\n                <span class="card-included-item-icon">\n                    <i class="far fa-calendar"></i>\n                </span>\n                <p class="card-included-text">12 Article</p>\n            </li>\n            <li class="card-included-item line">\n                <span class="card-included-item-icon">\n                    <i class="fas fa-video"></i>\n                </span>\n                <p class="card-included-text">Watch Offline</p>\n            </li>\n            <li class="card-included-item">\n                <span class="card-included-item-icon">\n                    <i class="far fa-clock"></i>\n                </span>\n                <p class="card-included-text">Lifetime access</p>\n            </li>\n        </ul>\n    </div>\n    '}(i))}();break;case"/login.html":i=document.getElementById("msg-error"),a=document.getElementById("login"),s=document.querySelector(".js-username"),r=document.querySelector(".js-password"),a.addEventListener("submit",(function(e){e.preventDefault(),c.users.all().forEach((function(e){var n;null!=e.login(s.value,r.value)&&(localStorage.setItem("user_id",null===(n=e.login(s.value,r.value))||void 0===n?void 0:n.toString()),window.location.href="/index.html")})),null==i||i.classList.add("active")}));break;case"/tableUser.html":u()}var i,a,s,r}()})();