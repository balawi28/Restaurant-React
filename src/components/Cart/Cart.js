import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconCart } from '../../icons/cart.svg';
import { cartActions } from '../../store';
import EmptyPage from '../EmptyPage/EmptyPage';
import './Cart.scss';
import CartItem from './CartItem';
import DeliveryChoice from './DeliveryChoice';

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
				<DeliveryChoice />
			</div>
			<div className='cart-total'>
				<h2>{`Order Total: ${cartTotal.toFixed(2)}₪`}</h2>
				<button onClick={submitOrder}>submit order</button>
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
