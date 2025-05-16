import './App.css'
import Navbar from './Components/Navbar';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import User from './Components/User';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';

function App() {
  const router = createBrowserRouter([
        {
          path:"/",
          element:<><Navbar /><Home /></> 
        },
        {
          path:"/login",
          element:<><Navbar /><Login /></> 
        },
        {
          path:"/about",
          element:<><Navbar /><About /></> 
        },
        {
          path:"/user/:username",
          element:<><Navbar /><User /></> 
        },
        {
          
          element:<><Navbar /><Footer /></> 
        },
        {
          path:"*",
          element:<><Navbar /><NotFound /></> 

        }

    ])
  

  return (
    <>
    
    <RouterProvider router={router} />
    </>
  )
}

export default App
