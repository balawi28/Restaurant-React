import React from 'react';

import { useSelector } from 'react-redux';
import './Order.css';
import OrderIngredient from './OrderIngredient';
import OrderTotal from './OrderTotal';

export default function Order({ food }) {
	const orderIngredients = useSelector(
		(state) => state.orderDraft[food].ingredients
	);

	const ingredients = useSelector((state) => state.ingredient.ingredients);
	function findIngredientPrice(ingredientName) {
		return ingredients.find(
			(ingredient) => ingredient.name === ingredientName
		).basePrice;
	}

	return (
		<div className='Order'>
			<OrderIngredient food='burger' name='bread-top' removable={false} />
			{orderIngredients.map((ingredient, index) =>
				[...Array(ingredient.quantity)].map((e, i) => (
					<OrderIngredient
						food={food}
						name={ingredient.name}
						price={findIngredientPrice(ingredient.name)}
						removable={true}
						key={'' + index + i}
					/>
				))
			)}
			<OrderIngredient food='burger' name='beef' removable={false} />
			<OrderIngredient
				food='burger'
				name='bread-bottom'
				removable={false}
			/>
			<OrderTotal food={food} />
		</div>
	);
}
