import { createBrowserRouter } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import RegisterAdm from '../views/RegisterAdm';
import RegisterClient from '../views/RegisterClient';

export const router = createBrowserRouter([
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

]);
