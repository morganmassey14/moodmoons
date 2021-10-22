// this is the homepage
import React, { useEffect, useState } from 'react';
import { deleteJournalEntry, getJournalEntryByUser } from "../../modules/JournalManager"
import { JournalCard } from './JournalCard'
import { useHistory } from 'react-router';
import './Journal.css'


export const JournalEntryList = () => {
    const [journalEntries, setJournalEntries] = useState([]);
    let user = parseInt(sessionStorage.getItem("moodmoons_user"))
    const history = useHistory();

    const getJournalEntries = () => {
        return getJournalEntryByUser(user).then(response => {
            setJournalEntries(response)
        })
    }

    const handleDeleteJournalEntry = id => {
        deleteJournalEntry(id)
            .then(() => getJournalEntryByUser(user).then(setJournalEntries))
    }

    useEffect(() => {
        getJournalEntries()
    }, [])

    return (
        <>
            <section className="newEntryButton">
                <button type="button"
                    className="buttonEntry"
                    onClick={() => { history.push("/journal/create") }}>
                    New Entry
                </button>
            </section>

            <div className="container-cards">
                {journalEntries.map (journalEntry => < JournalCard journalEntries = {journalEntry} key={journalEntry.id} journalEntry={journalEntry}
                    handleDeleteJournalEntry={handleDeleteJournalEntry} />)}
            </div>
        </>
    )
}