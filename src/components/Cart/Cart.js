import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconCart } from '../../icons/cart.svg';
import { ReactComponent as IconDelivery } from '../../icons/delivery.svg';
import { ReactComponent as IconStore } from '../../icons/store.svg';
import { cartActions } from '../../store';
import EmptyPage from '../EmptyPage/EmptyPage';
import Option from '../Option/Option';
import Options from '../Option/Options';
import './Cart.scss';
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
				<Options groupId={'order-type'}>
					<Option label={'Delivery'} Icon={IconDelivery} />
					<Option label={'Pickup'} Icon={IconStore} />
					<Option label={'Delivery'} Icon={IconDelivery} />
				</Options>
			</div>
			<div className='cart-total'>
				<h2>{`Order Total: ${cartTotal.toFixed(2)}₪`}</h2>
				<button onClick={submitOrder}>Submit Order</button>
			</div>
		</div>
	) : (
		<EmptyPage
			buttonText='Add to your cart'
			title='Empty Cart!'
			Icon={IconCart}
			navigateURL={'/'}
		/>
	);
}
