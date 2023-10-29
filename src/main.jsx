import React from 'react'
import ReactDOM from 'react-dom/client'
import AFishyBusiness from './AFishyBusiness'
import Slider from './components/slider-home/Slider'
import RouterError from './components/shared/error/RouterError'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './main.css'
import Login from './components/sign-in/Login'
import RegisterForm from './components/register/RegisterForm'

const router = createBrowserRouter([{
  path: '/',
  element: <AFishyBusiness />,
  errorElement: <RouterError />,
  children: [{
    path: 'home',
    element: <Slider />
  }, {
    path: 'register',
    element: <RegisterForm />
  }, {
    path: 'login',
    element: <Login />
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
