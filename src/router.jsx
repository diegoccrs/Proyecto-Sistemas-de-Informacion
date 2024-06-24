import { createBrowserRouter } from "react-router-dom";

import Root from './layout/Roots.jsx';
import { routes } from "./constants/routes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
       
    }


])