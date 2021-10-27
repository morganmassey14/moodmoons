import React from 'react'
import { useHistory } from 'react-router'
import "./User.css"

export const UserCard = ({ user }) => {
    const history = useHistory()
    let loggedInUserId = parseInt(sessionStorage.getItem("moodmoons_user"))
    if (user.userId === loggedInUserId) {
        return (
            <>
                <section className="user-profile">
                    <h1 className="userName">{user.name}</h1>
                    <img src={user.image} alt="User Image" />
                    <button className="userEditButton" type="button"
                        onClick={() => history.push(`/users/${user.id}/edit`)}>
                        Edit
                    </button>
                </section>
            </>
        )
    } else {

        return (
            <section className="user-profile">
                <h1 className="userName">{user.name}</h1>
                <img src={user.image} alt="User Image" />
            </section>
        )
    }
}