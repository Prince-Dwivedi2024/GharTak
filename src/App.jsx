import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Workers from './pages/Workers'
import Home from './pages/Home'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Login from './pages/Login'
import Appointment from './pages/Appointment'
import About from './pages/About'
import Nav from './components/Nav'

const router = createBrowserRouter(
  [
    {
      path : '/',
      element : 
      <div>
        <Nav/>
        <Home/>
        </div>
    },

    {
      path : '/workers',
      element : 
      <div>
        <Nav/>
        <Workers/>
        </div>
    },

    {
      path : '/workers/:speciality',
      element : 
      <div>
        <Nav/>
        <Workers/>
        </div>
    },

    {
      path : '/about',
     element : 
      <div>
        <Nav/>
        <About/>
        </div>
    },

    {
      path : '/myProfile',
      element : 
      <div>
        <Nav/>
        <MyProfile/>
        </div>
    },

    {
      path : '/myAppointments',
      element : 
      <div>
        <Nav/>
        <MyAppointments/>
        </div>
    },

    {
      path : '/login',
      element : 
      <div>
        <Nav/>
        <Login/>
        </div>
    },

    {
      path : '/contact',
      element : 
      <div>
        <Nav/>
        <Contact/>
        </div>
    },

    {
      path : '/about',
      element : 
      <div>
        <Nav/>
        <About/>
        </div>
    },

    {
      path : '/appointment/:docId',
      element : 
      <div>
        <Nav/>
        <Appointment/>
        </div>
    },
  ]
)

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App  