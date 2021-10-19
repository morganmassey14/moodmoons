const remoteURL = "http://localhost:2021"

export const getBreathingExerciseById = (breathingExerciseId) => {
    return fetch (`${remoteURL}/breathingexercises/${breathingExerciseId}`)
    .then(res => res.json())
}

export const getAllBreathingExercises = () => {
    return fetch(`${remoteURL}/breathingexercises`)
    .then(res => res.json())
}