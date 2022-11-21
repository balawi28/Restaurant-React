import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as IconRemove } from '../../icons/remove.svg';
import { cartActions } from '../../store';
import IngredientTag from '../IngredientTag/IngredientTag';
import QuantityCounter from '../QuantityCounter/QuantityCounter';
import './CartItem.css';

export default function CartItem({
	id,
	food,
	ingredients,
	quantity,
	orderTotal,
}) {
	//const { cart } = useSelector((state) => state.cart);
	function changeQuantity(quantity) {
		dispatch(cartActions.changeQuantity({ id, quantity }));
	}

	const dispatch = useDispatch();
	return (
		<div className='cart-item'>
			<img src={require(`../../images/${food}.png`)} alt={food} />
			<div>
				<p>{`${food}: ${(orderTotal * quantity).toFixed(2)}₪`}</p>
				{/* <p>{'Ingredients: ' + displayIngredients(ingredients)}</p> */}
				<IngredientTag
					label='tomato'
					imageDirectory='tomato.svg'
					qunatity={1}
				/>
			</div>
			<QuantityCounter
				count={quantity}
				change={changeQuantity}
				increment={() => dispatch(cartActions.incrementQuantity(id))}
				decrement={() => dispatch(cartActions.decrementQuantity(id))}
			/>
			<IconRemove onClick={() => dispatch(cartActions.remove(id))} />
		</div>
	);
}

function displayIngredients(ingredients) {
	let string = '';
	for (let i of ingredients)
		if (i.quantity > 0) string += `${i.name}(${i.quantity}) `;
	return string.length ? string : 'None';
}
