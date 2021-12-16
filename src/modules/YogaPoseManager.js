// this is where we will serve the JSON in our terminal
const remoteURL = "https://mood-moons-api.herokuapp.com"

// this API is a single responsibilty princicpal, its' one responsibilty is to interact with the API
export const getYogaPoseById = (yogaPoseId) => {
    return fetch(`${remoteURL}/yogaposes/${yogaPoseId}`)
    .then(res => res.json())
}
// yogapose API call: This call will hold on to the returned Data, and render it in the YogaPosesCard
export const getAllYogaPoses = () => {
    return fetch(`${remoteURL}/yogaposes`)
    .then(res => res.json())
}