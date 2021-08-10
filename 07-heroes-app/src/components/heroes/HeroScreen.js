import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from './../../selectors/getHeroById';
import { heroImages } from './../../helpers/helperImages';

export const HeroScreen = ({ history }) => {
    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

    if (hero.length === 0) {
        return <Redirect to='/' />;
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero[0];

    const handleReturn = () => {
        history.length >= 2 ? history.push('/') : history.goBack();
    };

    return (
        <div className='card mb-3 animate__animated animate__fadeIn'>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img
                        // src={`../assets/heroes/${id}.jpg`}
                        src={heroImages(`./${heroeId}.jpg`).default}
                        className='img-fluid rounded-start'
                        alt={superhero}
                    />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h3 className='card-title'>{superhero}</h3>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                Superhero: {superhero}
                            </li>
                            <li className='list-group-item'>
                                Publisher: {publisher}
                            </li>
                            <li className='list-group-item'>
                                Alter ego: {alter_ego}
                            </li>
                            <li className='list-group-item'>
                                First appearance: {first_appearance}
                            </li>
                            <li className='list-group-item'>
                                Character: {characters}
                            </li>
                        </ul>
                        <p className='card-text'>
                            <small className='text-muted'>
                                Last updated 3 mins ago
                            </small>
                        </p>

                        <button
                            className='btn btn-outline-info'
                            onClick={handleReturn}
                        >
                            Return
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
