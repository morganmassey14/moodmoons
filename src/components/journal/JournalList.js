// this is the homepage
import React, { useEffect, useState } from 'react';
import { deleteJournalEntry, getAllJournalEntries} from "../../modules/JournalManager"
import { JournalCard } from './JournalCard'
import { useHistory } from 'react-router';


export const JournalEntryList = () => {
    const [journalEntries, setJournalEntries] = useState([]);
    const history = useHistory();
  
    const getJournalEntries = () => {
        return getAllJournalEntries().then(journalEntriesFromAPI => { setJournalEntries(journalEntriesFromAPI)
        })
    }

    const handleDeleteJournalEntry = id => {
        deleteJournalEntry(id)
        .then(() => getAllJournalEntries().then(setJournalEntries))
    }

    useEffect(() => {
        getJournalEntries()
    },[])

    return (
      <>  
       <section className="section-content">
                <button type="button"
                    className="button"
                    onClick={() => { history.push("/journal/create") }}>
                    New Entry
                </button>
            </section>
    <div className="container-cards">
    {journalEntries.map(journalEntry => <JournalCard key={journalEntry.id} journalEntry={journalEntry}
    handleDeleteJournalEntry={handleDeleteJournalEntry} />)}
</div>
</>
    )
}