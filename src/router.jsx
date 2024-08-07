import { createBrowserRouter } from "react-router-dom";
import { routes } from "./constants/routes";
import Root from './layout/Roots.jsx';

import Home from "./views/HomePage.jsx";
import Menu from "./views/Menu.jsx";
import Nosotros from "./views/Nosotros.jsx";
import Ayuda from "./views/Ayuda.jsx";
import Acceder from "./views/Acceder.jsx";
import IniciarSesion from "./views/LoginPage.jsx";
import Error from "./views/Error.jsx";
import Perfil from "./views/Perfil.jsx";
import EditarPerfil from "./views/EditarPerfil.jsx";
import MenuAdmin from "./views/MenuAdmin.jsx"
import Platillos from "./views/Platillos.jsx";
import Comentarios from "./views/Comentarios.jsx";
import Historial from "./views/Historial.jsx";
import PedidosActuales from "./views/PedidosActuales.jsx";
import Cliente from "./views/Cliente.jsx";
import Pedido from "./views/Pedido.jsx";
import EditarMenu from "./views/EditarMenu.jsx";
import EaMenu from "./views/EaMenu.jsx";
import EditarPlatillo from "./views/EditarPlatillo.jsx";
import EaPlatillo from "./views/EaPlatillo.jsx";
import AdminPlatillos from "./views/AdminPlatillos.jsx";
import EaCombo from "./views/EaCombo.jsx";
import EditarCombo from "./views/EditarCombo.jsx";  

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
              path: routes[0].path,
              element: <Home />,
            },
            {
                path: routes[1].path,
                element: <Menu />,
            },////
            {
                path: routes[1]["children"][0].path,
                element: <Platillos />,
            },////
            {
                path: routes[2].path,
                element: <Nosotros />,
            },
            {
                path: routes[3].path,
                element: <Ayuda />,
            },
            {
                path: routes[4].path,
                element: <Acceder />,
            },
            {
                path: routes[5].path,
                element: <IniciarSesion />,
            },
            {
                path: routes[6].path,
                element: <Error />
            },
            {
                path: routes[7].path,
                element: <Perfil />
            },
            {
                path: routes[7]["children"][0].path,
                element: <EditarPerfil />,
            },
            {
                path: routes[8].path,
                element: <Comentarios />
            },
            {
                path: routes[9].path,
                element: <MenuAdmin />
            },
            {
                path: routes[9]["children"][0].path,
                element: <EditarMenu />,
            },
            {
                path: routes[9]["children"][1].path,
                element: <EditarPlatillo />,
            },
            {
                path: routes[9]["children"][2].path,
                element: <EaMenu />,
            },
            {
                path: routes[9]["children"][3].path,
                element: <EaPlatillo />,
            },
            {
                path: routes[9]["children"][4].path,
                element: <AdminPlatillos />,
            },
            {
                path: routes[9]["children"][5].path,
                element: <EaCombo />,
            },
            {
                path: routes[9]["children"][6].path,
                element: <EditarCombo />,
            },
            {
                path: routes[10].path,
                element: <Historial />
            },
            {
                path: routes[11].path,
                element: <PedidosActuales />
            },
            {
                path: routes[12].path,
                element: <Cliente />
            },
            {
                path: routes[13].path,
                element: <Pedido />
            },
        ],
    }


])