// import React from 'react'
import { NavLink } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import AddTodo from "./AddTodo"

function Navbar() {
    return (
        <div>

            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/Todos'>Todos</NavLink>


        </div>
    )
}

export default Navbar