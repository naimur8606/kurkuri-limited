import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/home'
import HomeContent from './components/home/homeContent/HomeContent'

const myCreateRoute = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path: "/",
        element: <HomeContent></HomeContent>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRoute}></RouterProvider>
  </React.StrictMode>,
)
