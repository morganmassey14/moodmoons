import React from "react"
import { Route } from "react-router-dom"
import { Journal } from "./journal/JournalList"
import { YogaPoseList } from "./yoga/YogaPoseList"
import { MeditationList } from "./meditations/MeditationList"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Redirect } from "react-router"
import { BreathingExerciseList } from "./breathing/BreathingExerciseList"
import { JournalEntryList } from "./journal/JournalList"
import { JournalForm } from "./journal/JournalForm"


export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
    return (
        <>
            <Route exact path="/">
                {isAuthenticated ? <JournalEntryList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/journal/create">
                <JournalForm />
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

