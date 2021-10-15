//use effect will allow us to access our API from this component
//use state initial value and current value of the array
import React, { useEffect, useState } from 'react';
//this is importing our fetch calls
import { getAllMeditations } from '../../modules/MeditationManager'
import { MeditationCard } from './MeditationCard'

export const MeditationList = () => {
    const [meditations, setMeditations] = useState([]);

    const getMeditations = () => {
        return getAllMeditations().then(meditationsFromAPI => {
            setMeditations(meditationsFromAPI)
        })
    }

    useEffect(() => {
        getMeditations();
    }, [])

    return (
        <div className="container-cards">
        {meditations.map(meditation => <MeditationCard key={meditation.id} meditation={meditation}/>)}
    </div>
    )
}