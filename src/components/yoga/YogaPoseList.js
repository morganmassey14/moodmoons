//use effect will allow us to access our API from this component
//use state initial value and current value of the array
import React, { useEffect, useState } from 'react';
//this is importing our fetch calls
import { getAllYogaPoses } from '../../modules/YogaPoseManager'
import { YogaPoseCard } from './YogaPoseCard';

export const YogaPoseList = () => {
// state is the initial vlaue, yogaPoses is the current value, setYogaOises is a function that allows us to change the state
    const [yogaPoses, setYogaPoses] = useState([]);
    
    const getYogaPoses = () => {
        //after the data comes back from the API, setYogaPoses is used to update state
        return getAllYogaPoses().then(yogaPosesFromAPI => { setYogaPoses(yogaPosesFromAPI)
        })
    }
//this function argument tells react to call the getYogaPoses function. The empty array tells react to call the function on the FIRST RENDER of the component.
    useEffect(() => {
        getYogaPoses();
    }, [])
    
    return (
    
        <div className="container-cards">
            {yogaPoses.map(yogaPose => <YogaPoseCard key={yogaPose.id} yogaPose={yogaPose}/>)}
        </div>
    )
}