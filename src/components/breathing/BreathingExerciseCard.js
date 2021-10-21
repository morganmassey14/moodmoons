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
            <h1 className="exerciseName">{breathingExercise.name}</h1>
            <div>{breathingExercise.description}</div>
            <div><a href={breathingExercise.url}  target="_blank">
            <button type="button" class="btn">
                    Watch Video
                </button>
                 </a></div>
        </section>
    </div>
    </>
    )
}