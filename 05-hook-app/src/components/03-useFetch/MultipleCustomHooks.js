import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';

import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);

	const { loading, data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	const { author, quote } = !!data && data[0];

	return (
		<>
			<h1>Breaking Hooks</h1>
			<hr />

			{loading ? (
				<div className='alert alert-info text-center'>Cargando...</div>
			) : (
				<blockquote className='blockquote text-end'>
					<p className=''> {quote}</p>
					<footer className='blockquote-footer'> {author} </footer>
				</blockquote>
			)}

			<button className='btn btn-primary' onClick={increment}>
				Siguiente quote
			</button>
		</>
	);
};
