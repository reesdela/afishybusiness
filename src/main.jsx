import React from 'react'
import ReactDOM from 'react-dom/client'
import AFishyBusiness from './AFishyBusiness'
import Slider from './components/slider-home/Slider'
import Register from './components/register/register'
import RouterError from './components/shared/error/RouterError'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './main.css'

const router = createBrowserRouter([{
  path: '/',
  element: <AFishyBusiness />,
  errorElement: <RouterError />,
  children: [{
    path: 'home',
    element: <Slider />
  }, {
    path: 'register',
    element: <Register />
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
