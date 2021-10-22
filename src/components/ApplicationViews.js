import React from "react"
import { Route } from "react-router-dom"
import { YogaPoseList } from "./yoga/YogaPoseList"
import { MeditationList } from "./meditations/MeditationList"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Redirect } from "react-router"
import { BreathingExerciseList } from "./breathing/BreathingExerciseList"
import { JournalEntryList } from "./journal/JournalList"
import { JournalForm } from "./journal/JournalForm"
import { JournalEditForm } from "./journal/JournalEditForm"
import { NavBar } from "./nav/NavBar"



export const ApplicationViews = ({ isAuthenticated, setAuthUser, clearUser }) => {
    
    return (
        <>  <Route path="/">
            {isAuthenticated ? <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/> : null}
            </Route>

            <Route exact path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>
            <Route exact path="/">
                {isAuthenticated ? <JournalEntryList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/journal/create">
                <JournalForm />
            </Route>

            <Route exact path="/:journalEntryId(\d+)/edit">
                <JournalEditForm />
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

