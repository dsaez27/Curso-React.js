import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from './../../hooks/useForm';
import { HeroCard } from './../heroes/HeroCard';
import { getHeroesByName } from './../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [inputValue, setInputValue] = useForm({
        search: q,
    });

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${inputValue.search}`);
    };

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />
            <div className='row'>
                <div className='col-md-4'>
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            name='search'
                            placeholder='Find your hero'
                            className='form-control'
                            value={inputValue.search}
                            onChange={setInputValue}
                        />
                        <button
                            type='submit'
                            className='btn m-1 btn-block btn-outline-primary'
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className='col-md-8'>
                    <h4>Results</h4>
                    <hr />
                    {q === '' && (
                        <div className='alert alert-info'>Search a hero</div>
                    )}

                    {q !== '' && heroesFiltered.length === 0 && (
                        <div className='alert alert-danger'>
                            There is no a hero with {q}
                        </div>
                    )}
                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
