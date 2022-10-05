import React from "react"
import { NavLink } from "react-router-dom"

function NavBar () {
    return(
        <nav className="navBar">
            <NavLink className="topbar" to="/">Home</NavLink>
            <NavLink className="topbar" to="/about">About</NavLink>
            <NavLink className="topbar" to="/search">Search</NavLink>
            <NavLink className="topbar" to="/decklist">Decklist</NavLink>
        </nav>
    )
}

export default NavBar;