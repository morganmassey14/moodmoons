import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import "./Login.css"
import logologin from "../../images/logologin.png"

export const Register = ({ setAuthUser }) => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:2021/users?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleCancel = () => {
        history.push("/login")
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    // If your json-server URL is different, please change it below!
                    fetch("http://localhost:2021/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                // The user id is saved under the key nutshell_user in session Storage. Change below if needed!
                                setAuthUser(createdUser)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
        <main className="container--register" style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>
            <section className="register">
                <form id= "form" className="form" className="topBefore" onSubmit={handleRegister}>
                    <div className="login__logo__img"><img className="logologin" src={logologin} alt="Mood Moons" /></div>
                    <fieldset>
                        <label htmlFor="firstName"></label>
                        <input type="text" 
                        name="firstName" 
                        id="firstName" 
                        className="firstName" 
                        placeholder="First name" 
                        required autoFocus value={registerUser.firstName} 
                        onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lastName"></label>
                        <input type="text" 
                        name="lastName" 
                        id="lastName" 
                        className="lastName" 
                        placeholder="Last name" 
                        required value={registerUser.lastName} 
                        onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputEmail"></label>
                        <input type="email" 
                        name="email" 
                        id="email" className="email" 
                        placeholder="Email address" 
                        required value={registerUser.email} 
                        onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <button type="submit"> Sign in </button>
                        <button onClick={handleCancel}> Cancel </button>
                    </fieldset>

                </form>
            </section>
        </main>
    )
}

