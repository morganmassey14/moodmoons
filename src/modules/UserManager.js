const remoteURL = "https://mood-moons-api.herokuapp.com"

export const getUserById = (userId) => {
    return fetch (`${remoteURL}/users/${userId}`)
    .then(res => res.json())
}

export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
    .then(res => res.json())
}

export const updateUser = (userObj) => {
	return fetch(`${remoteURL}/users/${userObj.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(userObj)
	}).then(data => data.json());
}