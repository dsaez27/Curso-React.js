import React from 'react';
import { JournalEntry } from './JournalEntry';
import { useSelector } from 'react-redux';

export const JournalEntries = () => {
    const { notes } = useSelector((state) => state.notes);

    return (
        <div className='journal__entries'>
            {notes.map((note) => {
                return (
                    <JournalEntry
                        key={note.id}
                        id={note.id}
                        date={note.date}
                        body={note.body}
                        title={note.title}
                        url={note.url}
                    />
                );
            })}
        </div>
    );
};
