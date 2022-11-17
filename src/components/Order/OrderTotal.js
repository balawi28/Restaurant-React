import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../slices/cart.slice';
import { orderDraftActions } from '../../store';
import QuantityCounter from '../QuantityCounter/QuantityCounter';
import './OrderTotal.css';

export default function OrderTotal({ food }) {
	const dispatch = useDispatch();
	const { orderTotal, ingredients, quantity } = useSelector(
		(state) => state.orderDraft[food]
	);

	function addToCardHandler() {
		dispatch(cartActions.add({ food, ingredients, quantity }));
	}

	function changeQuantity(quantity) {
		dispatch(
			orderDraftActions.changeQuantity({
				food: food,
				quantity,
			})
		);
	}

	function incrementQuantity() {
		dispatch(orderDraftActions.incrementQuantity({ food }));
	}

	function decrmentQuantity() {
		dispatch(orderDraftActions.decrementQuantity({ food }));
	}

	return (
		<div className='order-total'>
			{false && (
				<>
					<p>{`Discount: ${20}%`}</p>
					<p>{`Before Discount: ${orderTotal}₪`}</p>
				</>
			)}
			<QuantityCounter
				count={quantity}
				change={changeQuantity}
				increment={incrementQuantity}
				decrement={decrmentQuantity}
			/>
			<div>
				<p>{`Order Total: ${orderTotal}₪`}</p>
				<button onClick={addToCardHandler}>Add to Cart</button>
			</div>
		</div>
	);
}
