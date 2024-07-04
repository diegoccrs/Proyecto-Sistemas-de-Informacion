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
//import EditarPerfil from "./views/EditarPerfil.jsx";
import MenuAdmin from "./views/MenuAdmin.jsx"

import Comentarios from "./views/Comentarios.jsx";

import Hamburguesas from "./views/Hamburguesas.jsx";

import Cachapas from "./views/Cachapas.jsx";
import ClubHouses from "./views/ClubHouses.jsx";
import Arepas from "./views/Arepas.jsx";
import Pepitos from "./views/Pepitos.jsx";
import Parrillas from "./views/Parrillas.jsx";
import Sandwiches from "./views/Sandwiches.jsx";
import Ensaladas from "./views/Ensaladas.jsx";
import Otros from "./views/Otros.jsx";

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
            },///
            {
                path: routes[1]["children"][0].path,
                element: <Hamburguesas />,
            },/////           
            {
                path: routes[1]["children"][1].path,
                element: <Cachapas />,
            },
            {
                path: routes[1]["children"][2].path,
                element: <Arepas />,
            },
            ///
            {
                path: routes[1]["children"][3].path,
                element: <ClubHouses />,
            },
            {
                path: routes[1]["children"][4].path,
                element: <Pepitos />,
            },
            ///
            {
                path: routes[1]["children"][5].path,
                element: <Sandwiches />,
            },
            {
                path: routes[1]["children"][6].path,
                element: <Parrillas />,
            },

            {
                path: routes[1]["children"][7].path,
                element: <Ensaladas />,
            },
            {
                path: routes[1]["children"][8].path,
                element: <Otros />,
            },
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
        ],
    }


])