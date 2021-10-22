import React from 'react';
import { useHistory } from 'react-router';
import './Journal.css'

export const JournalCard = ({ journalEntry, handleDeleteJournalEntry }) => {
const history = useHistory();

    return (
        <section className="journal-section">
            <div className="journal__log"><strong>{journalEntry.journalLog}</strong></div>
            <hr></hr>
            <div className="journal__time">Date: {journalEntry.timestamp}</div>
            <div className="journal__mood">Mood: {journalEntry.mood.name}</div>
            <div className="journal__user">{journalEntry.user?.name}</div>
            <div className="journal__yoga">Yoga Pose: {journalEntry.yogaPose?.name}</div>
            <div className="journal__breathing">Breathing Exercise: {journalEntry.breathingExercise?.name}</div>
            <div className="journal__meditiation">Meditation :{journalEntry.meditation?.name}</div>
            <div className="button__container">
            <button className="buttonDelete" onClick={() => handleDeleteJournalEntry(journalEntry.id)}>Delete</button>
            <button className="buttonEdit" type="button"
                onClick={() => history.push(`/${journalEntry.id}/edit`)}>
                Edit
            </button>
            </div>
    </section>
    )
}