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
            {
                path: "/menu/cachapas",
                name: "Cachapas",
            },
            {
                path: "/menu/clubhouse",
                name: "Club House",
            },
            {
                path: "/menu/parrillas",
                name: "Parrillas",
            },
            {
                path: "/menu/pepitos",
                name: "Pepitos",
            },
            {
                path: "/menu/sandwiches",
                name: "Sandwiches",
            },
            {
                path: "/menu/arepas",
                name: "Arepas",
            },
            {
                path: "/menu/ensaladas",
                name: "Ensaladas",
            },
            {
                path: "/menu/otros",
                name: "Otros",
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
        path: "/comentarios",
        name: "Comentarios",
    },
    {
        path: "/menuadmin",
        name: "MenuAdmin",
    },
    {
        path: "/historial",
        name: "Historial",
    },
    {
        path: "/pedidosactuales",
        name: "PedidosActuales",
    },
    {
        path: "/cliente",
        name: "Cliente",
    },
] as const