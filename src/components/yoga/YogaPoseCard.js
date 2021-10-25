import React from "react"
import "./YogaPose.css"

export const YogaPoseCard = ({ yogaPose }) => {
    return (
        <>

        <div className="yoga-section">
            <section className="yogaPose">
            <picture>
                <img src={require(`../../images/${yogaPose.image}`).default} alt="My Dog" />
            </picture>
            <h1 className="poseName">{yogaPose.name} </h1>
            <div>{yogaPose.description}</div>
            <div><a href={yogaPose.url}  target="_blank">
           <button type="button" className="buttonVideo">Watch Video
           </button>
           </a></div>
        </section>
        </div>
        </>
    )
}