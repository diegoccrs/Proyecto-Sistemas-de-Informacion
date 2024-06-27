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
                path: routes[8].path,
                element: <EditarPerfil />
              }
        ],
    }


])