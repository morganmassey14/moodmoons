import React, { useState, useEffect } from "react";
import { MessageCard } from "./MessageCard";
import { deleteMessage, getAllMessages, addMessage } from "../../modules/MessageManager"
import { formatAMPM } from "../../Date";


export const MessageList = () => {
    let user = parseInt(sessionStorage.getItem("moodmoons_user"))
    const [messages, setMessages] = useState([]);


    const [message, setMessage] = useState({
        userId: user,
        messageLog: "",
        timestamp: formatAMPM(new Date)
    })

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

    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newMessage[event.target.id] = selectedVal
        setMessage(newMessage)
    }

    const handleClickSaveNewMessage = (event) => {
        event.preventDefault()
        console.log("save")
        addMessage(message)
            .then(() => {
                setMessage({
                    userId: user,
                    messageLog: "",
                    timestamp: formatAMPM(new Date)
                })
                getMessages()
            })

    }

    return (
        <>
            <div>
                <form >
                    <div>
                        <label htmlFor="messageLog"> </label>
                        <textarea id="messageLog" onChange={handleControlledInputChange} placeholder="Enter Message for the chat" size="50" value={message.messageLog} />
                    </div>
                    <button className="messageSaveButton"
                        onClick={handleClickSaveNewMessage}>
                        Save
                    </button>
                </form>
            </div>
            <div className="message-cards">
                {messages.map(message => <MessageCard handleDeleteMessage={handleDeleteMessage} key={message.id} message={message} />)}
            </div>

        </>
    )
}