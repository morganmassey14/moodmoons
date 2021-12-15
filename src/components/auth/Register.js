import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import "./Login.css"
import logologin from "../../images/logologin.png"

export const Register = ({ setAuthUser }) => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "", image:"" })
    const [conflictDialog, setConflictDialog] = useState(false)
    const [image, setImage] = useState("")

    const history = useHistory()


    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`https://mood-moons-api.herokuapp.com/users?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "ltpz1b8n");
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dexjhtget/image/upload",
            {
                method: "POST",
                body: data,
            }
        );
        const file = await res.json();
        setImage(file.secure_url);
    };

    const handleCancel = () => {
        history.push("/login")
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    // If your json-server URL is different, please change it below!
                    fetch("https://mood-moons-api.herokuapp.com/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`,
                            image:  image ? image : registerUser.image,
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
                    <div className="registerButtons">
                    <fieldset className="file-input">
                    <input type="file" id="file" className="file" onChange={uploadImage}/>
                    <label for="file">Choose File</label>
                </fieldset>
                    <fieldset>
                        <div className="registerbutton">
                        <button className="buttonSubmitRegister" type="submit"> Sign in </button>
                        </div>
                        <button className="buttonCancelRegister" onClick={handleCancel}> Cancel </button>
                        
                    </fieldset>
                    </div>
                    
                </form>
            </section>
        </main>
    )
}

