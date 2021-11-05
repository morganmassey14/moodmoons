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
import { MessageList } from "./messages/MessageList"
import { MessageForm } from "./messages/MessageForm"
import { MessageEditForm } from "./messages/MessageEditForm"
import { UserList } from "./user/UserProfile"
import { UserEditForm } from "./user/UserEditForm"

export const ApplicationViews = ({ isAuthenticated, setAuthUser, clearUser }) => {

    return (
        <>  <Route path="/">
            {isAuthenticated ? <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} /> : null}
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

            <Route exact path="/messages">
                <MessageList />
            </Route>

            <Route exact path="/messages/:messageId(\d+)/edit">
                <MessageEditForm />
            </Route>

            <Route path="/message/create">
                <MessageForm />
            </Route>

            <Route exact path="/users">
                <UserList />
            </Route>

            <Route exact path="/users/:userId(\d+)/edit">
                <UserEditForm />
            </Route>
        </>
    )
}

