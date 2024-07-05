import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx'

import App from './App.jsx'
import './index.css'

// <React.StrictMode>
//     <RouterProvider router={router} />
// </React.StrictMode>

// <App />

ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
)
