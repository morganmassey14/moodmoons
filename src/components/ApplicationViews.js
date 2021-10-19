import React from "react"
import { Route } from "react-router-dom"
import { Journal } from "./journal/JournalList"
import { YogaPoseList } from "./yoga/YogaPoseList"
import { MeditationList } from "./meditations/MeditationList"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Redirect } from "react-router"
import { BreathingExerciseList } from "./breathing/BreathingExerciseList"


export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
    return (
        <>
            <Route exact path="/">
                {isAuthenticated ? <Journal /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            <Route exact path="/yogaposes">
                <YogaPoseList />
            </Route>

            <Route exact path="/meditations">
                <MeditationList />
            </Route>

            <Route exact path="/breathingexercises">
                <BreathingExerciseList />
            </Route>
        </>
    )
}

