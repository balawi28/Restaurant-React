import cx from 'classnames';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import IngredientTag from '../IngredientTag/IngredientTag';
import './CartItem.scss';

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
		<div className='cart-item' onClick={showDetailsHandle}>
			<div
				className={cx({
					'cart-item-main-body': true,
					'hide-buttons': !showDetails,
				})}
			>
				<div className='cart-item-image-total'>
					<img src={require(`../../images/${food}.png`)} alt={food} />
					<p>{`${food}: ${(orderTotal * quantity).toFixed(2)}₪`}</p>
				</div>
				<button
					className={cx({
						'cart-item-expand-button': true,
						rotated: showDetails,
					})}
				>
					{'>'}
				</button>
				<div
					className='cart-item-buttons'
					onClick={(e) => e.stopPropagation()}
				>
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
				<div className='cart-item-additional-body'>
					<p>Additional Ingredients:</p>
					{ingredients.map(
						({ name, quantity, imageDirectory }) =>
							quantity > 0 && (
								<IngredientTag
									label={name}
									imageDirectory={imageDirectory}
									qunatity={quantity}
									key={name}
								/>
							)
					)}
				</div>
			)}
		</div>
	);
}
