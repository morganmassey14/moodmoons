import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../modules/UserManager';
import { UserCard } from './UserCard';

export const UserList = () => {
    // let user = parseInt(sessionStorage.getItem("moodmoons_user"))
    const [users, setusers] = useState([]);

    const getUsers = () => {
        return getAllUsers().then(usersFromAPI => {
            setusers(usersFromAPI)
        })
    }

    useEffect (() => {
        getUsers()
    },[])

    return (
        <div className="container-cards">
            {users.map(user => <UserCard key={user.id} user={user} />)}
        </div>
    )
}