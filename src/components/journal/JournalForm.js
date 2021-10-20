import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addJournalEntry } from '../../modules/JournalManager';
import { getAllMeditations } from '../../modules/MeditationManager';
import { getAllYogaPoses } from '../../modules/YogaPoseManager';
import { getAllBreathingExercises } from '../../modules/BreathingExerciseManager';
import { getAllMoods } from '../../modules/JournalManager';
import { formatAMPM } from '../../Date';

export const JournalForm = () => {
    let user = parseInt(sessionStorage.getItem("moodmoons_user"))

    const [journalEntry, setJournalEntry] = useState({
        userId: user,
        yogaPoseId: 0,
        meditationId: 0,
        breathingExerciseId: 0,
        moodId: 0,
        journalLog: "",
        timestamp: formatAMPM(new Date)
    });

    const [yogaPoses, setYogaPoses] = useState([]);
    const [meditations, setMeditations] = useState([]);
    const [moods, setMoods]  = useState([]);
    const [breathingExercises, setBreathingExercises] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newJournalEntry = { ...journalEntry }
        let selectedVal = event.target.value
        
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newJournalEntry[event.target.id] = selectedVal
        setJournalEntry(newJournalEntry)
    }

    const handleCancelButton = () => {
        history.push("/")
    }


    useEffect (() => {
        getAllYogaPoses().then(yogaPoses => {
            setYogaPoses(yogaPoses);
        })
    }, []);

    useEffect (() => {
        getAllMeditations().then(meditations => {
            setMeditations(meditations);
        })
    }, []);

    useEffect (() => {
        getAllBreathingExercises().then(breathingExercises => {
            setBreathingExercises(breathingExercises);
        })
    }, []);

    useEffect (() => {
        getAllMoods().then(moods => {
            setMoods(moods);
        })
    }, []);

    const handleClickSaveJournalEntry = (event) => {
        event.preventDefault()

        const meditationId = journalEntry.meditationId
        const moodId = journalEntry.moodId
        const yogaPoseId = journalEntry.yogaPoseId
        const breathingExerciseId = journalEntry.breathingExerciseId

        if (meditationId === 0 || moodId === 0 || yogaPoseId === 0 || breathingExerciseId === 0) {
            window.alert("Please select a meditation, yoga pose, breathing exercise, and mood")
        } else {

            addJournalEntry(journalEntry)
            .then(() => history.push("/"))
        }

    }

    return (
        <form className="journalForm">
            <h2 className="journalForm__title">New Journal</h2>
            <fieldset>
            <div className="form-group">
					<label htmlFor="meditation">Select Meditation </label>
					<select value={journalEntry.meditationId} name="meditationId" id="meditationId" onChange={handleControlledInputChange} className="form-control" >
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
            <div className="form-group">
					<label htmlFor="mood">Select Mood </label>
					<select value={journalEntry.moodId} name="moodId" id="moodId" onChange={handleControlledInputChange} className="form-control" >
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
            <div className="form-group">
					<label htmlFor="yogaPose">Select Yoga Pose </label>
					<select value={journalEntry.yogaPoseId} name="yogaPoseId" id="yogaPoseId" onChange={handleControlledInputChange} className="form-control" >
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
            <div className="form-group">
					<label htmlFor="breathingExercise">Select Breathing Exercise </label>
					<select value={journalEntry.breathingExerciseId} name="breathingExerciseId" id="breathingExerciseId" onChange={handleControlledInputChange} className="form-control" >
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
				<div className="form-group">
					<label htmlFor="journalLog">Journal Log</label>
					<input type="text" id="journalLog" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="entrylog" value= {journalEntry.journalLog} />
				</div>
			</fieldset>
            <button className="btn btn-primary"
				onClick={handleClickSaveJournalEntry}>
				Save Entry
          </button>
          <button className="journal-cancel-button"
                onClick={handleCancelButton}>
                Cancel
            </button>
        </form>
    )
}