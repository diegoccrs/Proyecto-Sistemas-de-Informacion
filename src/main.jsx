import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router} from './router.jsx'
import UseProvider from './providers/UserProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UseProvider>
            <RouterProvider router={router} />
        </UseProvider>
    </React.StrictMode>,
)
