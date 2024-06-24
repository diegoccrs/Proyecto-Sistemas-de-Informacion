import { createBrowserRouter } from "react-router-dom";
import Home from './views/HomePage';
import Root from './layout/Roots.jsx';
import { routes } from "./constants/routes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
     
    }


])