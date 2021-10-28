import React from "react"
import "./NavBar.css"

export const GetUser = () => {
    let user = sessionStorage.getItem("moodmoons_username")

    if (user) {
        return (
            <div className="intro">
                <p>{user}</p>
                <img src={user.image} alt="User Image" />
            </div>
        )
    } else {
        return (
            null
        )
}
}