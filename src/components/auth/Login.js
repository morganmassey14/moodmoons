import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./Login.css"
import logologin from "../../images/logologin.png"


export const Login = ({ setAuthUser }) => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`https://mood-moons-api.herokuapp.com/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    setAuthUser(exists)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        
        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
            <section className="main">
                <form id= "form" className="topBefore" onSubmit={handleLogin}>
                <div className="login__logo__img"><img className="logologin" src={logologin} alt="Mood Moons" /></div>
                    <fieldset>
                        <label htmlFor="inputEmail"></label>
                        <input type="email"
                            id="email"
                            className="email"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />
                    </fieldset>
                    <div className="loginbutton">
                
                        <button className= "buttonSignIn" type="submit">
                            Sign in
                        </button>
                    <button className= "buttonRegister" type="register">
                <Link to="/register" style={{ color: '#55628F' }}>Register</Link>
            </button>
            </div>
            </form>
            </section>
        </main>
    )
}
