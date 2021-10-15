import index from ".";
import courseVideo from "./courseVideo";
import routerInteface from "./interface/routerInterface";
import login from "./login";
import productDetail from "./productDetail";
import tableUser from "./tableUser";

/**
 * variable whit page paths
 */
const routes: routerInteface = {
    '/': index,
    '/index': index,
    '/detalleProduct': productDetail,
    '/login': login,
    '/tableUser': tableUser,
    '/courseVideo': courseVideo
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