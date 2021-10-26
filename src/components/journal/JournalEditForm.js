import React, { useState, useEffect } from "react"
import { update, getJournalEntryById } from "../../modules/JournalManager"
import { useParams, useHistory } from "react-router-dom"
import { getAllMeditations } from '../../modules/MeditationManager';
import { getAllYogaPoses } from '../../modules/YogaPoseManager';
import { getAllBreathingExercises } from '../../modules/BreathingExerciseManager';
import { getAllMoods } from '../../modules/JournalManager';
import './JournalForm.css'
import journallogo from "../../images/journallogo.png"

export const JournalEditForm = () => {
    let user = parseInt(sessionStorage.getItem("moodmoons_user"))

    const [journalEntry, setJournalEntry] = useState({
        id: 0,
        userId: user,
        yogaPoseId: 0,
        meditationId: 0,
        breathingExerciseId: 0,
        moodId: 0,
        journalLog: "",
        timestamp: ""
    });


    const [isLoading, setIsLoading] = useState(false);
    const [yogaPoses, setYogaPoses] = useState([]);
    const [meditations, setMeditations] = useState([]);
    const [moods, setMoods] = useState([]);
    const [breathingExercises, setBreathingExercises] = useState([]);

    const { journalEntryId } = useParams();

    const history = useHistory();

    const handleFieldChange = (evt) => {
        const stateToChange = { ...journalEntry };
        stateToChange[evt.target.id] = evt.target.value;
        setJournalEntry(stateToChange);
    }

    const handleCancel = () => {
        history.push("/")
    }

    useEffect(() => {
        getJournalEntryById(journalEntryId)
            .then(journalEntry => {
                setJournalEntry(journalEntry);
                setIsLoading(false)
            })
    }, []);



    useEffect(() => {
        getAllYogaPoses().then(yogaPoses => {
            setYogaPoses(yogaPoses);
        })
    }, []);

    useEffect(() => {
        getAllMeditations().then(meditations => {
            setMeditations(meditations);
        })
    }, []);

    useEffect(() => {
        getAllBreathingExercises().then(breathingExercises => {
            setBreathingExercises(breathingExercises);
        })
    }, []);

    useEffect(() => {
        getAllMoods().then(moods => {
            setMoods(moods);
        })
    }, []);


    const updateExistingJournalEntry = (evt) => {
        evt.preventDefault()
        setIsLoading(true);
        const editedJournalEntryObj ={
        id: parseInt(journalEntryId),
        userId: user,
        meditationId: parseInt(journalEntry.meditationId),
        moodId: parseInt(journalEntry.moodId),
        yogaPoseId: parseInt(journalEntry.yogaPoseId),
        breathingExerciseId: parseInt(journalEntry.breathingExerciseId),
        journalLog: journalEntry.journalLog,
        timestamp: journalEntry.timestamp
        }
        if (editedJournalEntryObj.meditationId === 0 || editedJournalEntryObj.moodId === 0 || editedJournalEntryObj.yogaPoseId === 0 || editedJournalEntryObj.breathingExercisesId === 0) {
            window.alert("Please select a meditation, yoga pose, breathing exercise, and mood")
        } else {

            update(editedJournalEntryObj, journalEntryId)
                .then(() => history.push("/"))
        };
}
    return (
        <>  <div className="journal__logo"><img className="journallogo" src={journallogo} alt="Journal Logo" /></div>
            <form className="journalEditForm">
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="meditation">Select Meditation </label>
                        <select value={journalEntry.meditationId} name="meditationId" id="meditationId" onChange={handleFieldChange} className="form-control" >
                            <option value="0">Select a meditation</option>
                            {meditations.map(m => (
                                <option key={m.id} value={m.id}>
                                    {m.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="yogaPose">Select Yoga Pose </label>
                        <select value={journalEntry.yogaPoseId} name="yogaPoseId" id="yogaPoseId" onChange={handleFieldChange} className="form-control" >
                            <option value="0">Select a yoga pose</option>
                            {yogaPoses.map(y => (
                                <option key={y.id} value={y.id}>
                                    {y.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="breathingExercise">Select Breathing Exercise </label>
                        <select value={journalEntry.breathingExerciseId} name="breathingExerciseId" id="breathingExerciseId" onChange={handleFieldChange} className="form-control" >
                            <option value="0">Select a breathing exercise</option>
                            {breathingExercises.map(b => (
                                <option key={b.id} value={b.id}>
                                    {b.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="mood">Select Mood </label>
                        <select value={journalEntry.moodId} name="moodId" id="moodId" onChange={handleFieldChange} className="form-control" >
                            <option value="0">Select a meditation</option>
                            {moods.map(z => (
                                <option key={z.id} value={z.id}>
                                    {z.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="formgrid">
                    <label htmlFor="name">Journal Log</label>
                        <input
                            type="text"
                            required
                            className="journallog"
                            onChange={handleFieldChange}
                            id="journalLog"
                            value={journalEntry.journalLog}
                        />
                        </div>
                       <div className="submitButton">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingJournalEntry}
                            className="buttonSubmit"
                        >Submit</button>
                        </div>
                        <div className="cancelNewEntryButton">
                        <button className="buttonCancel" onClick={handleCancel}> Cancel </button>
                        </div>        
                </fieldset>
            </form>
        </>
    )
}