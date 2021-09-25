import * as _ from 'lodash';
import index from "..";
import detalleProducto from '../detalleProducto';


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
    }
})(window.location.pathname)
