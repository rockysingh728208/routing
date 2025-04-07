import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Param from './components/param';

const router=createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <Navbar/>
      <Home/>
    </div>
  },

  {
    path:"/contact",
    element:
    <div>
      <Navbar/>
      <Contact/>
    </div>
    
  },

  {
    path:"/dashboard",
    element:
    <div>
      <Navbar/>
      <Dashboard/>
    </div>
    
  },
  {
    path:"/student/:id",
    element:
    <div>
    <Navbar/>
    <Param/>
  </div>
  }
]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
