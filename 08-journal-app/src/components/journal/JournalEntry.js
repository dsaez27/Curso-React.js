import React from 'react';

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage:
                        'url(https://i.blogs.es/2e7900/img19_1920x1200/1366_2000.jpg)',
                }}
            ></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo día
                </p>
                <p className='journal__entry-content'>
                    Lorem Commodo tempor adipisicing proident enim proident labore dolor dolore nostrud ullamco.
                </p>
            </div>
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};
