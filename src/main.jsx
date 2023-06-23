import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/Root'
import App from './App.jsx'
import './index.css'

import Cye from './pages/Cye';
import Hero from './components/Hero/Hero';



const router = createBrowserRouter([
{
  path: '/', 
  element: <Root />,
  //Loader: rootLoader,
  children:[
    {index: true, element: <Hero />},
    {
      path: 'cye',
      element: <Cye />
    
    }
  ]
}



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
