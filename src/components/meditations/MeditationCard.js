import React from "react"
import "./Meditation.css"

export const MeditationCard = ({ meditation }) => {
    return (
        <>
            <section className="container-cards">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={require(`../../images/${meditation.image}`).default} alt="Mediation Name" />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="meditationName">{meditation.name} </h1>
                            <div>{meditation.description}</div>
                            <div><a href={meditation.url} target="_blank">
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