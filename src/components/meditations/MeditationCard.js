import React from "react"
import "./Meditation.css"

export const MeditationCard = ({ meditation }) => {
    return (
        <>
            <section className="container-cards">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={require(`../../images/${meditation.image}`).default} alt="Mediation Name" />
                        </div>
                        <div class="flip-card-back">
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