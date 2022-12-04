import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconCart } from '../../icons/cart.svg';
import { ReactComponent as IconSuccess } from '../../icons/success.svg';
import { cartActions } from '../../store';
import EmptyPage from '../EmptyPage/EmptyPage';
import Expire from '../Expire/Expire';
import Modal from '../Modal/Modal';
import './Cart.scss';
import CartItem from './CartItem';
import DeliveryChoice from './DeliveryChoice';

export default function Cart() {
	const dispatch = useDispatch();
	const { cart, cartTotal, anonymousUser } = useSelector(
		(state) => state.cart
	);

	function submitOrder() {
		dispatch(cartActions.postCart({ cart, anonymousUser }));
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
			{
				<Expire delay={1500}>
					<Modal
						Icon={IconSuccess}
						text={'Successfully added!'}
					></Modal>
				</Expire>
			}
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
