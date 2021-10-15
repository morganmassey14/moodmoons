import React from "react"
import { Route } from "react-router-dom"
import { Journal } from "./journal/JournalList"
import { YogaPoseList } from "./yoga/YogaPoseList"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Journal />
            </Route>

            <Route exact path="/yogaposes">
                <YogaPoseList />
            </Route>
        </>
    )
}

