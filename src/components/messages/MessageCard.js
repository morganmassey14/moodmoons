import React from "react";
import { useHistory } from "react-router";
import './Message.css'
import { MessageEditForm } from "./MessageEditForm"


export const MessageCard = ({ message, handleDeleteMessage }) => {
    const history = useHistory()
    let loggedInUserId = parseInt(sessionStorage.getItem("moodmoons_user"))
    if (message.id === loggedInUserId) {
    return (
        <>
        <div className="message-section-flex">
        <section className="message-section">
            <h4 className="message__log">{message.messageLog}</h4>
            <div className="message__time"><strong>Date</strong> <i>{message.timestamp}</i></div>
            <div className="message__user"><strong>Posted By</strong> <i>{message.user?.name}</i></div>
            
            <button className="messageEditButton" type="button"
                        onClick={() => history.push(`/messages/${message.id}/edit`)}>
                        Edit
                    </button>
                    
        </section> 
        </div>
        
        </>
    )
} else {

    return (
        <div className="message-section-flex">
        <section className="message-section">
        <h4 className="message__log">{message.messageLog}</h4>
        <div className="message__time"><strong>Date</strong> <i>{message.timestamp}</i></div>
        <div className="message__user"><strong>Posted By</strong> <i>{message.user?.name}</i></div>
        </section>
        </div>

    )
}
}