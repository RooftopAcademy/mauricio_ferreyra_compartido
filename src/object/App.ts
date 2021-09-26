import * as _ from 'lodash';
import index, { store } from "..";
import detalleProducto from '../detalleProducto';
import login from '../login';
import tableUser from '../tableUser';

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
        case '/tableUser.html':
            tableUser()
            break;
    }
})(window.location.pathname)
