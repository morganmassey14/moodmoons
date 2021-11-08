import React, {useState} from 'react';
import { formatAMPM } from '../../Date';
import { addMessage } from '../../modules/MessageManager';
import './Message.css'
import { useHistory } from 'react-router';

export const MessageForm = () => {
    let user = parseInt(sessionStorage.getItem("moodmoons_user"))
    const [message, setMessage] = useState({
        userId: user,
        messageLog: "",
        timestamp: formatAMPM(new Date)
    })

    const history = useHistory();

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
        addMessage(message).then(() => history.push("/messages"))
        

    }

return (
    <>
<form className="messageLog">
<fieldset>
    <div className="form-group">
<label htmlFor="messageLog"> </label>
<input type="text" id="messageLog" onChange={handleControlledInputChange} placeholder="Enter Message for the chat" size="50" value={message.messageLog} />
</div>
</fieldset>
    <button className="messageSaveButton"
        onClick={handleClickSaveNewMessage}>
        Save
    </button>
    </form>
</>
)
}