import React from 'react';
import { useHistory } from 'react-router';
import './Journal.css'

export const JournalCard = ({ journalEntry, handleDeleteJournalEntry }) => {
const history = useHistory();

    return (
        
        <section className="journal-section">
            <div className="with-border">
            <h2 className="journal__log">{journalEntry.journalLog}</h2>
            <hr></hr>
            <div className="journal__time"><strong>Date</strong> <i>{journalEntry.timestamp}</i></div>
            <div className="journal__mood"><strong>Mood</strong> <i>{journalEntry.mood.name}</i></div>
            <div className="journal__user">{journalEntry.user?.name}</div>
            <div className="journal__yoga"><strong>Yoga Pose</strong> <i>{journalEntry.yogaPose?.name}</i></div>
            <div className="journal__breathing"><strong>Breathing Exercise</strong> <i>{journalEntry.breathingExercise?.name}</i></div>
            <div className="journal__meditiation"><strong>Meditation:</strong> <i>{journalEntry.meditation?.name}</i></div>
            <div className="editButton">
            <button className="buttonEdit" type="button"
                onClick={() => history.push(`/${journalEntry.id}/edit`)}>
                Edit
            </button>
            </div>
            <button className="buttonDelete" onClick={() => handleDeleteJournalEntry(journalEntry.id)}>Delete</button>
            </div>
    </section>

   )
}