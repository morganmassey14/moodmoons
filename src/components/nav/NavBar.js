import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import logo from "../../images/logo.png"

export const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo__img"><img className="logo" src={logo} alt="Mood Moons" /></div>
                <ul className="navbar">
                    <li className="navbar__link__active">
                        <Link className="navbar__link" to="/">Journal</Link>
                    </li>
                    <li className="navbar__link">
                        <Link className="navbar__link" to="/yogaposes">Yoga</Link>
                    </li>
                    <li className="navbar__link">
                        <Link className="navbar__link" to="/meditations">Meditations</Link>
                    </li>
                    <li className="navbar__link">
                        <Link className="navbar__link" to="/breathingexercises">Brea</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}