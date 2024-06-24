import { createBrowserRouter } from 'react-router-dom';


import Home from './views/HomePage';
import Root from './layout/Roots.jsx';
import { routes } from "./constants/routes";

/**
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import RegisterAdm from '../views/RegisterAdm';
import RegisterClient from '../views/RegisterClient';

**/


export const router = createBrowserRouter([

    {
        path: "/",
        element: <Root/>,
     
    }
]);

    /**
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/app',
        element: <div>App</div>,
    },

    {
        path: '/admin',
        element: <RegisterAdm />,
    },
    {
        path: '/client',
        element: <RegisterClient />,
    },
    **/
