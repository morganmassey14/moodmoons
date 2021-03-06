const remoteURL = "https://mood-moons-api.herokuapp.com"

export const getAllMessages = () => {
    return fetch (`${remoteURL}/messages?_expand=user`)
    .then(response => response.json())
}

export const getMessageById = (messageId) => {
    return fetch(`${remoteURL}/messages/${messageId}?_expand=user`)
    .then(response => response.json())
}

export const deleteMessage = (id) => {
    return fetch(`${remoteURL}/messages/${id}`, {
        method: "DELETE"
    }).then(result => result.json())

}

export const addMessage = (newMessage) => {
    return fetch(`${remoteURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }).then(response => response.json())
}

export const updateMessage = (messageObj) => {
	return fetch(`${remoteURL}/messages/${messageObj.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(messageObj)
	}).then(data => data.json());
}