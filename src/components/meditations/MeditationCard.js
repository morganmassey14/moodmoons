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
            <h1 className="meditationName">{meditation.name} </h1>
            <div>{meditation.description}</div>
            <div><a href={meditation.url}  target="_blank">
                <button type="button" class="btn">
                    Watch Video
                </button>
                </a></div>
        </section>
        </div>
        </>
        
    )
}