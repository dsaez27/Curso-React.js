import React, { useState } from 'react';
import {AddCategory} from './Components/AddCategory';
import {GifGrid} from './Components/GifGrid';

export const GifExpertApp = ({ defaultCategories = []}) => {
	const [categories, setCategories] = useState(defaultCategories);

	//? const handleAdd = () => setCategories(cats => [...cats, 'HunterXHunter']);

	//* const categories = ['One punch', 'Samurai X', 'Dragon Ball'];

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{
					categories.map((category) => (
						<GifGrid
							key={category}
							category={category}					
						/>
					))
				}
			</ol>

		</>
	)
}

