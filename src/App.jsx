// import './App.css'
import AddTodo from './components/AddTodo'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {

  const router= createBrowserRouter([{
    path:'/',
    element: <><Navbar /><Home /></>
  },
    {
      path: '/about',
      element: <><Navbar /><About /></>
    }, {
      path: '/Todos',
      element: <><Navbar /><AddTodo /></>
    }


])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
