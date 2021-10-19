import React from 'react'
import "./BreathingExercise.css"

export const BreathingExerciseCard = ({ breathingExercise }) => {
    return (
        <>

    <div className="breathing-section">
        <section className="breathingExercise">
            <picture>
                <img src={require(`../../images/${breathingExercise.image}`).default} alt="Breathing Image" />
            </picture>
            <h3 className="exerciseName">{breathingExercise.name}</h3>
            <div>{breathingExercise.description}</div>
            <div><a href={breathingExercise.url} target="Watch Video">{breathingExercise.url}</a></div>
        </section>
    </div>
    </>
    )
}