import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store';
import './Cart.css';
import CartItem from './CartItem';

export default function Cart() {
	const dispatch = useDispatch();
	const { cart, cartTotal } = useSelector((state) => state.cart);

	function submitOrder() {
		dispatch(cartActions.postCart(cart));
	}

	return cart.length ? (
		<div className='cart'>
			<div>
				{cart.map(
					({ food, ingredients, quantity, orderTotal }, index) => (
						<CartItem
							id={index}
							food={food}
							ingredients={ingredients}
							quantity={quantity}
							orderTotal={orderTotal}
							key={index}
						/>
					)
				)}
			</div>
			<div className='cart-total'>
				<h2>{`Order Total: ${cartTotal.toFixed(2)}₪`}</h2>
				<button onClick={submitOrder}>Submit Order</button>
			</div>
		</div>
	) : (
		<div className='cart-empty'>
			<h2>Your cart is empty!</h2>
		</div>
	);
}
