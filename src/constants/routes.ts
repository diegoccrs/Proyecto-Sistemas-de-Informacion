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
                path: "/menu/platillos/:categoId",
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
        children:[
            {
                path: "/menuadmin/editarmenu",
                name: "EditarMenu",
            },
            {
                path: "/menuadmin/editarplatillo",
                name: "EditarPlatillo",
            },
            {
                path: "/menuadmin/eamenu",
                name: "EaMenu",
            },
            {
                path: "/menuadmin/eaplatillo",
                name: "EaPlatillo",
            },
            {
                path: "/menuadmin/adminplatillos/:categoId",
                name: "AdminPlatillos",
            },
            {
                path: "/menuadmin/eacombo",
                name: "EaCombo",
            },
            {
                path: "/menuadmin/editarcombo",
                name: "EditarCombo",
            },

        ],
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
        path: "/compra",
        name: "Compra",
    },
] as const


