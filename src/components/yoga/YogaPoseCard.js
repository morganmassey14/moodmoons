import React from "react"
import "./YogaPose.css"

export const YogaPoseCard = ({ yogaPose }) => {
    return (
        <>
            <section className="container-cards">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={require(`../../images/${yogaPose.image}`).default} alt="My Dog" />
                        </div>

                        <div class="flip-card-back">
                            <h1 className="poseName">{yogaPose.name} </h1>
                            <div>{yogaPose.description}</div>
                            <div><a href={yogaPose.url} target="_blank">
                                <button type="button" className="buttonVideo">Watch Video
                                </button>
                            </a></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}