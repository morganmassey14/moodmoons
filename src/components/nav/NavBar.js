import React from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import "./NavBar.css"
import logo from "../../images/logo.png"
import { GetUser } from "./GetUser"

export const NavBar = ({ clearUser, isAuthenticated }) => {

    const history = useHistory()

    const handleLogout = () => {
        const retVal = window.confirm("Are you sure you want to Logout?")

        if (retVal == true) {
          history.push('/login');
          clearUser();
        } else {
          return false
        }

    }

    return (
        <>
            <nav className="navbar">
                <div className="logo__img"><img className="logo" src={logo} alt="Mood Moons" /></div>
                <div className="nav__flex__bar">
                <ul className="navbar">
            
                    
                        <li className="navbar__link">
                            <Link className="navbar__link" to="/">Journal</Link>
                        </li>
                
                        <li className="navbar__link">
                            <Link className="navbar__link" to="/yogaposes">Yoga</Link>
                        </li>
                        <li className="navbar__link">
                            <Link className="navbar__link" to="/meditations">Meditations</Link>
                        </li>
                    
                        <li className="navbar__link">
                            <Link className="navbar__link" to="/breathingexercises">Breathing</Link>
                        </li>
                
                        <li className="navbar__link" >
                            <a className="navbar__link" onClick={handleLogout} >Logout</a>
                        </li>
                        {/* <GetUser /> */}
                </ul>
                </div>
            </nav>

        </>
    )
}