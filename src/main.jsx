import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom"
import Home from './components/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path: "/contact",
        element: <div>"This is new Routes"</div>,
      },
    ]
  },
  
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


