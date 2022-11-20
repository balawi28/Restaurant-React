import React from 'react';
import { useSelector } from 'react-redux';
import Element from './Element';
import './ElementAdder.css';

export default function ElementAdder({ food }) {
	const { foodIngredients } = useSelector((state) => state.foodIngredient);

	return (
		<div className='element-adder'>
			{foodIngredients.map(
				({ ingredient, weight }) =>
					ingredient.addable && (
						<Element
							name={ingredient.name}
							key={ingredient.name}
							price={Math.ceil(ingredient.kilogramPrice * weight)}
							food={food}
						/>
					)
			)}
		</div>
	);
}
