import React from "react"
import "./Meditation.css"

export const MeditationCard = ({ meditation }) => {
    return (
        <>

<div className="meditation-section">
            <section className="meditation">
            <picture>
                <img src={require(`../../images/${meditation.image}`).default} alt="My Dog" />
            </picture>
            <h3 className="poseName">{meditation.name} </h3>
            <div>{meditation.description}</div>
            <div><a href={meditation.url} target="_blank">{meditation.url}</a></div>
        </section>
        </div>
        </>
        
    )
}