//import { Children } from "react";

export const routes = [
    {
        path: "/",
        name: "Inicio",
    },
    {
        path: "/menu",
        name: "Menú",
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
    },
    {
        path: "/editarperfil",
        name: "EditarPerfil",
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


