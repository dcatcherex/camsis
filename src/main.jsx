import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/Root'
import App from './App.jsx'
import './index.css'

import Cye from './pages/Cye';
import Usd from './pages/Usd';
import Slp from './pages/Slp';
import Hero from './components/Hero/Hero';

import Privacy from './pages/Privacy';
import Term from './pages/Term';
import Health from './pages/Health';
import Cookies from './pages/Cookies';
import Safeguarding from './pages/Safeguarding';
import Complaints from './pages/Complaints';
import Coronavirus from './pages/Coronavirus';








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
      path: 'slp',
      element: <Slp />
    },
    {
      path: 'privacy',
      element: <Privacy />
    },
    {
      path: 'term',
      element: <Term />
    },
    {
      path: 'health',
      element: <Health />
    },
    {
      path: 'cookies',
      element: <Cookies />
    },
    {
      path: 'safeguarding',
      element: <Safeguarding  />
    },
    {
      path: 'complaints',
      element: <Complaints />
    },
    {
      path: 'coronavirus',
      element: <Coronavirus />
    },
  ]
}



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
