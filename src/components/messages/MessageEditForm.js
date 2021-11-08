import React, { useState, useEffect } from "react"
import { getMessageById, updateMessage } from "../../modules/MessageManager"
import { useParams, useHistory } from "react-router"

export const MessageEditForm = () => {
    let user = parseInt(sessionStorage.getItem("moodmoons_user"))
    
    const [message, setMessage] = useState({})


    const { messageId } = useParams()
    const history = useHistory()

    const handleFieldChange = event => {
        const stateToChange = { ...message }
        stateToChange[event.target.id] = event.target.value;
        setMessage(stateToChange)
    }

    const handleCancel = () => {
        history.push("/messages")
    }

    useEffect(() => {
        getMessageById(messageId)
            .then(messageFromAPI => setMessage(messageFromAPI))
    }, [])

    const updateExistingMessage = event => {
        event.preventDefault()
        const editedMessage = {
            id: parseInt(messageId),
            messageLog: message.messageLog,
            timestamp: message.timestamp,
            userId: user
        }

        updateMessage(editedMessage)
            .then(() => history.push("/messages"))
    }

    return (
        <>
                 <form className="message">

                <label className="update-message-header" htmlFor="messageLog"></label>
                <fieldset className="message-edit-form">

                    <input type="text" id="messageLog" onChange={handleFieldChange} placeholder="Enter New Message" size="100" value={message.messageLog} />
                </fieldset>

                <div className="message-buttons-container">
                    <button className="messageUpdateButton" type="button" onClick={updateExistingMessage}>Update</button>
                    <button className="messageCancelButton" onClick={handleCancel}> Cancel </button>
                </div>
            </form>
        </>
    )

}