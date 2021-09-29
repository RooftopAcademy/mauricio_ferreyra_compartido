import index from ".";
import detalleProducto from "./detalleProducto";
import routerInteface from "./interface/routerInterface";
import login from "./login";
import tableUser from "./tableUser";

/**
 * variable whit page paths
 */
const routes: routerInteface = {
    '/': index,
    '/index.html': index,
    '/detalleProducto.html': detalleProducto,
    'login.html': login,
    '/tableUser.html': tableUser
}

/**
 *
 * render the page depending on the url
 *  
 * @param path is the url you are currently in
 */
export default function router(path: string) {
    routes[path]()
}