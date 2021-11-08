import React, { useState, useEffect } from "react";
import { MessageCard } from "./MessageCard";
import { deleteMessage, getAllMessages} from "../../modules/MessageManager"
import { useHistory } from "react-router";
import { MessageForm } from "./MessageForm";
import './Message.css'


export const MessageList = () => {
    let user = parseInt(sessionStorage.getItem("moodmoons_user"))
    const [messages, setMessages] = useState([]);
    const history = useHistory();


    const getMessages = () => {
        return getAllMessages().then(response => {
            setMessages(response)
        })
    }

    const handleDeleteMessage = id => {
        deleteMessage(id)
            .then(() => getAllMessages(user).then(setMessages))
    }
    useEffect(() => {
        getMessages()
    }, [])

    return (
<>
           
                        
                            <div className="messageButton">
                        <button className="newMessageButton" type="button"
                        onClick= {() => { history.push("/message/create") }}>
                            New Message
                            </button>
                            </div>
                    


            <div className="message-cards">
                {messages.map(message => <MessageCard handleDeleteMessage={handleDeleteMessage} key={message.id} message={message} />)}
            </div>

     </>
    )
}