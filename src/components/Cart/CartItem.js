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
		<div className='cart-item'>
			<div className={cx({ 'square-corners': showDetails })}>
				<div>
					<img src={require(`../../images/${food}.png`)} alt={food} />
					<p>{`${food}: ${(orderTotal * quantity).toFixed(2)}₪`}</p>
				</div>

				<div>
					<button
						className={cx({ rotated: showDetails })}
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
				<div>
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
