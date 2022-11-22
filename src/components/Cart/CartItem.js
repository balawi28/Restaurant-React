import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import './CartItem.css';

export default function CartItem({
	id,
	food,
	ingredients,
	quantity,
	orderTotal,
}) {
	const [showDetails, setShowDetails] = useState(false);

	function changeQuantity(e) {
		dispatch(cartActions.changeQuantity({ id, quantity: e.target.value }));
	}

	function showDetailsHandle() {
		setShowDetails((previous) => !previous);
	}

	function decrementQuantityHandle() {
		dispatch(cartActions.decrementQuantity(id));
	}

	function incrementQuantityHandle() {
		dispatch(cartActions.incrementQuantity(id));
	}

	function removeItemHandle() {
		dispatch(cartActions.remove(id));
	}

	const dispatch = useDispatch();
	return (
		<div className='parentt'>
			<div className='cart-item'>
				<img src={require(`../../images/${food}.png`)} alt={food} />
				<div>
					<p>{`${food}: ${(orderTotal * quantity).toFixed(2)}₪`}</p>
				</div>
				<div className='cart-button-wrapper'>
					<button
						className={showDetails ? 'rotated' : ''}
						onClick={showDetailsHandle}
					>
						{'>'}
					</button>
					<button onClick={decrementQuantityHandle}>-</button>
					<input
						type='number'
						value={quantity}
						onChange={changeQuantity}
					/>
					<button onClick={incrementQuantityHandle}>+</button>
					<button onClick={removeItemHandle}>×</button>
				</div>
			</div>
			{showDetails && (
				<div className='cart-ingredients'>
					{displayIngredients(ingredients)}
				</div>
			)}
		</div>
	);
}

function displayIngredients(ingredients) {
	let string = '';
	for (let i of ingredients)
		if (i.quantity > 0) string += `${i.name}(${i.quantity}) `;
	return string.length ? string : 'None';
}

/* <div>
					<IngredientTag
						label='tomato'
						imageDirectory='tomato.svg'
						qunatity={1}
					/>
					<IngredientTag
						label='tomato'
						imageDirectory='tomato.svg'
						qunatity={1}
					/>
					<IngredientTag
						label='tomato'
						imageDirectory='tomato.svg'
						qunatity={1}
					/>
					<IngredientTag
						label='tomato'
						imageDirectory='tomato.svg'
						qunatity={1}
					/>
				</div> */
