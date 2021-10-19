import React from 'react';

export const JournalCard = ({ journalEntry, handleDeleteJournalEntry }) => {


    return (
        <section className="journal__entry">
            <div className="journal__user">{journalEntry.user?.name}</div>
            <div className="journal__yoga">{journalEntry.yogaPose?.name}</div>
            <div className="journal__breathing">{journalEntry.breathingExercise?.name}</div>
            <div className="journal__meditiation">{journalEntry.meditation?.name}</div>
            <div className="journal__log">{journalEntry.journalLog}</div>
            <div className="journal__mood">{journalEntry.mood.name}</div>
            <button className="journal__delete__edit" onClick={() => handleDeleteJournalEntry(journalEntry.id)}>Delete</button>

    </section>
    )
}