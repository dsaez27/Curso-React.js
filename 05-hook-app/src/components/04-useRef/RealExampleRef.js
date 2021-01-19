import React, { useState } from 'react'
import { MultipleCustomHooks } from './../03-useFetch/MultipleCustomHooks'

import './effect.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
		<>
			<h1>RealExampleRef</h1>
			<hr />

			{show && <MultipleCustomHooks />}

			<br />
			<button
				className='btn btn-primary mt-5'
				onClick={() => setShow(!show)}>
				Show/Hide
			</button>
		</>
	);
}
