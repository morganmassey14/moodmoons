import React from "react"
import "./Meditation.css"

export const MeditationCard = ({ meditation }) => {
    return (
        <>

<div className="meditation-section">
            <section className="meditation">
            <picture>
                <img src={require(`../../images/${meditation.image}`).default} alt="Mediation Name" />
            </picture>
            <h3 className="meditationName">{meditation.name} </h3>
            <div>{meditation.description}</div>
            <div><a href={meditation.url} target="_blank">Watch Video</a></div>
        </section>
        </div>
        </>
        
    )
}