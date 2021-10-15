import React from "react"
import { Route } from "react-router-dom"
import { Journal } from "./journal/JournalList"

export const ApplicationViews = () => {
    return (
        <>
        <route exact path="/">
            <Journal />
        </route>
        </>
    )
}

