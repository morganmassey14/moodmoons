import React, { useEffect, useState } from 'react';
import { getAllBreathingExercises } from '../../modules/BreathingExerciseManager';
import { BreathingExerciseCard } from './BreathingExerciseCard'

export const BreathingExerciseList = () => {
    const [breathingExercises, setBreathingExercises] = useState([]);

    const getBreathingExercises = () => {
        return getAllBreathingExercises().then(breathingExercisesFromAPI => {
            setBreathingExercises(breathingExercisesFromAPI)
        })
    }

    useEffect (() => {
        getBreathingExercises()
    },[])

    return (
        <div className="container-cards">
            {breathingExercises.map(breathingExercise => <BreathingExerciseCard key={breathingExercise.id} breathingExercise={breathingExercise}/>)}
        </div>
    )
}