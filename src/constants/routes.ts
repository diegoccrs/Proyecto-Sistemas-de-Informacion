//import { Children } from "react";

export const routes = [
    {
        path: "/",
        name: "Inicio",
    },
    {
        path: "/menu",
        name: "Menu",
        children:[
            {
                path: "/menu/hamburguesas",
                name: "Hamburguesas",
            },

        ],
    },
    {
        path: "/nosotros",
        name: "Nosotros",
    },
    {
        path: "/ayuda",
        name: "Ayuda",
    },
    {
        path: "/acceder",
        name: "Acceder",
    },
    {
        path: "/login",
        name: "IniciarSesion",
    },
    {
        path: "/*",
        name: "Error"
    },
    {
        path: "/perfil",
        name: "Perfil",
        children:[
            {
                path: "/perfil/editarperfil",
                name: "EditarPerfil",
            },

        ],
    },
    {
        path: "/menuadmin",
        name: "MenuAdmin",
    },
    {
        path: "/comentarios",
        name: "Comentarios",
    },
    {
        path: "/historial",
        name: "Historial",
    },
    {
        path: "/PedidosActuales",
        name: "PedidosActuales",
    },
    {
        path: "/cliente",
        name: "Cliente",
    },

] as const


