import React from "react"
import "./NavBar.css"

export const GetUser = () => {
    let user = sessionStorage.getItem("moodmoons_username")

    if (user) {
        return (
            <div className="intro">
                <p>Welcome, {user}</p>
            </div>
        )
    } else {
        return (
            null
        )
}
}