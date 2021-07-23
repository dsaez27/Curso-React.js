import React from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { heroes } from './../../data/heroes';
import { useForm } from './../../hooks/useForm';
import { HeroCard } from './../heroes/HeroCard';

export const SearchScreen = ({ history }) => {
    const location = useLocation();
    console.log(location);
    const { q = ''} = queryString.parse(location.search);

    const [inputValue, setInputValue] = useForm({
        search: q,
    });

    const heroesFiltered = heroes;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${inputValue.search}`);
    };

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Find your hero"
                            className="form-control"
                            value={inputValue.search}
                            onChange={setInputValue}
                        />
                        <button type="submit" className="btn m-1 btn-block btn-outline-primary">
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-md-8">
                    <h4>Resuls</h4>
                    <hr />
                    {heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
