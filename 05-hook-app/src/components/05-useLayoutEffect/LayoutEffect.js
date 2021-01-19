import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';

import '../03-useFetch/effect.css';

export const LayoutEffect = () => {
	const { counter, increment } = useCounter(1);
	const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];
    
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

	return (
		<>
			<h1>Breaking Hooks</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p
                    className='mb-0'
                    ref={ pTag }
                > {quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

			<button className='btn btn-primary m' onClick={increment}>
				Siguiente quote
			</button>
		</>
	);
};
