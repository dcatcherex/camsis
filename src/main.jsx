import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/Root'
import App from './App.jsx'
import './index.css'

import Cye from './pages/Cye';
import Usd from './pages/Usd';
import Hero from './components/Hero/Hero';

import Privacy from './pages/Privacy'



const router = createBrowserRouter([
{
  path: '/', 
  element: <Root />,
  //Loader: rootLoader,
  children:[
    {index: true, element: <Hero />},
    {
      path: 'home',
      element: <Hero />
    },
    {
      path: 'cye',
      element: <Cye />
    },
    {
      path: 'usd',
      element: <Usd />
    },
    {
      path: 'privacy',
      element: <Privacy />
    },
  ]
}



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
