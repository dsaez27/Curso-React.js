import React from 'react';
import { HeroList } from './../heroes/HeroList';

export const DcScreen = () => {
    return (
        <>
            <h1>DC Comics</h1>
            <hr />

            <HeroList publisher="DC Comics" />
        </>
    );
};
