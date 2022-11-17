import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from '../../slices/order.slice';
import './Cart.css';
import CartItem from './CartItem';

export default function Cart() {
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.cart);
	console.log(cart);

	function submitOrder() {
		dispatch(orderActions.add(cart));
	}

	return (
		<div className='cart'>
			{cart.map(({ food, ingredients, quantity }, index) => (
				<CartItem
					id={index}
					food={food}
					ingredients={ingredients}
					quantity={quantity}
					key={index}
				/>
			))}
			<button onClick={submitOrder}>Submit Order</button>
		</div>
	);
}
