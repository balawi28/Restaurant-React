import React from 'react';
import { useSelector } from 'react-redux';
import Ingredient from './Ingredient';
import './IngredientAdder.css';

export default function IngredientAdder({ foodName }) {
	const { foodIngredients } = useSelector((state) => state.foodIngredient);

	return (
		<div className='ingredient-adder'>
			{foodIngredients.map(
				({ food, ingredient, weight, addable, imageDirectory }) =>
					addable &&
					foodName === food.name && (
						<Ingredient
							name={ingredient.name}
							key={ingredient.name}
							price={Math.ceil(ingredient.kilogramPrice * weight)}
							food={foodName}
							imageDirectory={imageDirectory}
						/>
					)
			)}
		</div>
	);
}
