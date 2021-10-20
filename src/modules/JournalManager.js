const remoteURL = "http://localhost:2021"

export const getJournalEntryById = (journalEntryId) => {
    return fetch(`${remoteURL}/journalentries/${journalEntryId}?_expand=meditation&_expand=breathingExercise&_expand=yogaPose&_expand=mood`)
    .then(res => res.json())
}

export const getAllJournalEntries = () => {
    return fetch(`${remoteURL}/journalentries?_expand=meditation&_expand=breathingExercise&_expand=yogaPose&_expand=mood`)
    .then(res => res.json())
}

export const deleteJournalEntry = (id) => {
    return fetch(`${remoteURL}/journalentries/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addJournalEntry = (newJournalEntry) => {   return fetch(`${remoteURL}/journalentries`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json" 
    },
    body: JSON.stringify(newJournalEntry)
}).then(response => response.json())

}

export const getAllMoods = () => {
    return fetch(`${remoteURL}/moods`)
    .then(res => res.json())
}

export const update = (editedJournalEntry, id) => {
    return fetch(`${remoteURL}/journalentries/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedJournalEntry)
    }).then(data => data.json());
}