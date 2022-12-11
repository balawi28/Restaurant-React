import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import './Order.scss';
import OrderIngredient from './OrderIngredient';
import OrderTotal from './OrderTotal';

export default function Order({ foodName }) {
	const { foodIngredients } = useSelector((state) => state.foodIngredient);
	const orderIngredients = useSelector(
		(state) => state?.orderDraft[foodName]?.ingredients
	);

	return (
		<div className='Order'>
			{foodIngredients.map(
				({ positioning, food, ingredient, imageDirectory }) =>
					positioning < 0 &&
					food.name === foodName && (
						<OrderIngredient
							food={foodName}
							name={ingredient.name}
							price={ingredient.price}
							removable={false}
							imageDirectory={imageDirectory}
							key={ingredient.name}
						/>
					)
			)}
			{_.map(orderIngredients, (ingredient, index) =>
				[...Array(ingredient.quantity)].map((e, i) => (
					<OrderIngredient
						food={foodName}
						name={ingredient.name}
						price={ingredient.price}
						removable={true}
						imageDirectory={ingredient.imageDirectory}
						key={`${index}${i}`}
					/>
				))
			)}
			{foodIngredients.map(
				({ ingredient, food, positioning, imageDirectory }) =>
					positioning > 0 &&
					food.name === foodName && (
						<OrderIngredient
							food={foodName}
							name={ingredient.name}
							price={ingredient.price}
							removable={false}
							imageDirectory={imageDirectory}
							key={ingredient.name}
						/>
					)
			)}
			<OrderTotal food={foodName} />
		</div>
	);
}
