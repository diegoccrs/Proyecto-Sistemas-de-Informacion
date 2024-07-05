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
                path: "/menu/platillos",
                name: "Platillos",
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
    {
        path: "/comprar",
        name: "Comprar",
    },
    {
        path: "/resumenpedido",
        name: "ResumenPedido",
    },
] as const


