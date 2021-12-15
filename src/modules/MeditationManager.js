// this is where we will serve the JSON in our terminal
const remoteURL = "https://mood-moons-api.herokuapp.com/"

// this API is a single responsibilty princicpal, its' one responsibilty is to interact with the API
export const geMeditationById = (meditationId) => {
    return fetch(`${remoteURL}/meditations/${meditationId}`)
    .then(res => res.json())
}
// meditation API call: This call will hold on to the returned Data, and render it in the MeditationCard
export const getAllMeditations = () => {
    return fetch(`${remoteURL}/meditations`)
    .then(res => res.json())
}