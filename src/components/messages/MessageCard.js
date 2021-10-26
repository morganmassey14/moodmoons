import React from "react";
import { useHistory } from "react-router";
import './Message.css'

export const MessageCard = ({ message, handleDeleteMessage }) => {
    const history = useHistory()
    let loggedInUserId = parseInt(sessionStorage.getItem("moodmoons_user"))
    if (message.userId === loggedInUserId) {
    return (
        <>
        <section className="message-section">
            <div className="message__log">Message: {message.messageLog}</div>
            <div className="message__time">Date: {message.timestamp}</div>
            <div className="message__user">User: {message.user?.name}</div>
            <button className="messageDeleteButton" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
            <button className="messageEditButton" type="button"
                        onClick={() => history.push(`/messages/${message.id}/edit`)}>
                        Edit
                    </button>
        </section> 
        </>
    )
} else {

    return (
        <section className="message-section">
        <div className="message__log">Message: {message.messageLog}</div>
        <div className="message__time">Date: {message.timestamp}</div>
        <div className="message__user">User: {message.user?.name}</div>
        </section>
    )
}
}