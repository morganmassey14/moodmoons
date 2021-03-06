import React, {useState} from "react"
import { ApplicationViews } from "./ApplicationViews"

export const Moodmoons = () => {
    

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("moodmoons_user") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("moodmoons_user", user.id)
    sessionStorage.setItem("moodmoons_username", user.name)
    sessionStorage.setItem("moodmoons_userimage", user.image)
    setIsAuthenticated(sessionStorage.getItem("moodmoons_user") !== null)
  }

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("moodmoons_user") !== null)
  }

    
    return (
        <>
        <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} clearUser={clearUser} />
        </>
    )
}