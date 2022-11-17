import React from 'react';
import { useSelector } from 'react-redux';
import Element from './Element';
import './ElementAdder.css';

export default function ElementAdder({ food }) {
	const ingredientMenu = useSelector((state) =>
		state.ingredient.ingredients.filter((ingredient) => ingredient.addable)
	);

	return (
		<div className='element-adder'>
			{ingredientMenu.map((ingredient) => (
				<Element
					name={ingredient.name}
					key={ingredient.name}
					price={ingredient.basePrice}
					food={food}
				/>
			))}
		</div>
	);
}
