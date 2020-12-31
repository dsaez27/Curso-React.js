import React from 'react';
import { useFetch } from '../../Hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    
    const { author, quote }  = !!data && data[0];
    console.log(author, quote);

    return (
		<>
			<h1>Breaking Hooks</h1>
			<hr />

            {
                loading ? (<div className='alert alert-info text-center'>Cargando...</div>) : (
                    <blockquote className='blockquote text-end'>
                        <p className=''> { quote }</p>
                        <footer className='blockquote-footer'> { author } </footer>
                    </blockquote>
                )
            }
		</>
	);
}
