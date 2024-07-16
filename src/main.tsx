import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Explore from './pages/explore.tsx'
import Projects from './pages/projects.tsx'
import Services from './pages/services.tsx'
import Stacks from './pages/stacks.tsx'
import Journey from './pages/journey.tsx'
import Blogs from './pages/blogs.tsx'
import Resources from './pages/resources.tsx'
import Contact from './pages/contact.tsx'


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
    path:"/stack",
    element:<Stacks/>
  },{
    path:"/services",
    element:<Services/>
  },{
    path:"/journey",
    element:<Journey/>
  },{
    path:"/blogs",
    element:<Blogs/>
  },{
    path:"/resources",
    element:<Resources/>
  },{
    path:"/Contact",
    element:<Contact/>
  }]
}])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
