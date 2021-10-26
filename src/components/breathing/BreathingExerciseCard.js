import React from 'react'
import "./BreathingExercise.css"

export const BreathingExerciseCard = ({ breathingExercise }) => {
    return (
        <>

            <section className="container-cards">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={require(`../../images/${breathingExercise.image}`).default} alt="Breathing Image" />
                        </div>
                        <div class="flip-card-back">
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