import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Explore from './pages/explore.tsx'
import Projects from './pages/projects.tsx'
import Services from './pages/services.tsx'


const appRouter=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[{
    path:"/",
    element:<Explore/>
  },{
    path:"/projects",
    element:<Projects/>
  },{
    path:"/services",
    element:<Services/>
  }]
}])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
