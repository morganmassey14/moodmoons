import React from "react"
import "./YogaPose.css"

export const YogaPoseCard = ({ yogaPose }) => {
    return (
        <>
            <section className="container-cards">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={require(`../../images/${yogaPose.image}`).default} alt="My Dog" />
                        </div>

                        <div className="flip-card-back">
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