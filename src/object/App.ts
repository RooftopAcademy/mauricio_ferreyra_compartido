import * as _ from 'lodash';
import index from "..";
import detalleProducto from '../detalleProducto';
import login from '../login';
import { Store } from './Store';

// let store:Store

// if (!store.iniciado) {
//     store = new Store
//     store.fetchCourses();
// } 

(function App(path: string) {
    switch (path) {
        case '/':
            index()
            break;
        case '/index.html':
            index()
            break;
        case '/detalleProducto.html':
            detalleProducto()
            break;
        case '/login.html':
            login()
            break;
    }
})(window.location.pathname)
