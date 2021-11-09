import React from 'react'
import "./BreathingExercise.css"

export const BreathingExerciseCard = ({ breathingExercise }) => {
    return (
        <>

            <section className="container-cards">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={require(`../../images/${breathingExercise.image}`).default} alt="Breathing Image" />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="exerciseName">{breathingExercise.name}</h1>
                            <div>{breathingExercise.description}</div>
                            <div><a href={breathingExercise.url} target="_blank">
                                <button type="button" className="buttonVideo">
                                    Watch Video
                                </button>
                            </a></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}