// this is where we will serve the JSON in our terminal
const remoteURL = "http://localhost:2021"

// this API is a single responsibilty princicpal, its' one responsibilty is to interact with the API
export const getJournalEntryById = (journalEntryId) => {
    return fetch(`${remoteURL}/journalentries/${journalEntryId}?_expand=meditation&_expand=breathingExercise&_expand=yogaPose&_expand=mood`)
    .then(res => res.json())
}

// journal API call: This call will hold on to the returned Data, and render it in the JournalCard
export const getAllJournalEntries = () => {
    return fetch(`${remoteURL}/journalentries?_expand=meditation&_expand=breathingExercise&_expand=yogaPose&_expand=mood`)
    .then(res => res.json())
}

// this call allows for deleting journal entries from the API
export const deleteJournalEntry = (id) => {
    return fetch(`${remoteURL}/journalentries/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

// this call allows adding journal entries using the post method
export const addJournalEntry = (newJournalEntry) => {   return fetch(`${remoteURL}/journalentries`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json" 
    },
    body: JSON.stringify(newJournalEntry)
}).then(response => response.json())

}

// this call gets the moods from the API
export const getAllMoods = () => {
    return fetch(`${remoteURL}/moods`)
    .then(res => res.json())
}

// this call uses the put method to edit journal entries
export const update = (editedJournalEntry, id) => {
    return fetch(`${remoteURL}/journalentries/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedJournalEntry)
    }).then(data => data.json());
}

// this call allows us to make journal entries user specific
export const getJournalEntryByUser = (userId) => {
    return fetch(`${remoteURL}/journalentries/?userId=${userId}&_expand=meditation&_expand=breathingExercise&_expand=yogaPose&_expand=mood`)
    .then(res => res.json())
}