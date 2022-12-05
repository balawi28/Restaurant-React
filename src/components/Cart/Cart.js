import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconCart } from '../../icons/cart.svg';
import { cartActions } from '../../store';
import EmptyPage from '../EmptyPage/EmptyPage';
import Expire from '../Expire/Expire';
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';
import './Cart.scss';
import CartItem from './CartItem';
import DeliveryChoice from './DeliveryChoice';

export default function Cart() {
	const dispatch = useDispatch();
	const { cart, isLoading, isPostSucceded, isPostFailed } = useSelector(
		(state) => state.cart
	);

	function clear() {
		dispatch(cartActions.clearIsCartPosted());
	}

	return cart.length ? (
		<Loading isLoading={isLoading}>
			<div className='cart'>
				<div>
					<CartItems />
					<DeliveryChoice />
				</div>
				<CartTotal />
			</div>

			<Expire
				delay={1000}
				active={isPostSucceded || isPostFailed}
				clear={clear}
			>
				<Modal
					success={isPostSucceded}
					successText={'Successfully added!'}
					failureText={'Failed to add the order!'}
				></Modal>
			</Expire>
		</Loading>
	) : (
		<EmptyPage
			buttonText='Add to your cart'
			title='Empty Cart!'
			Icon={IconCart}
			navigateURL={'/'}
		/>
	);
}

function CartItems() {
	const { cart } = useSelector((state) => state.cart);

	return cart.map((cartItem, index) => (
		<CartItem id={index} key={index} {...cartItem} />
	));
}

function CartTotal() {
	const dispatch = useDispatch();
	const { cart, cartTotal, anonymousUser, type } = useSelector(
		(state) => state.cart
	);

	function submitOrder() {
		dispatch(cartActions.postCart({ cart, type, anonymousUser }));
	}

	return (
		<div className='cart-total'>
			<h2>{`Order Total: ${cartTotal.toFixed(2)}₪`}</h2>
			<button onClick={submitOrder}>submit order</button>
		</div>
	);
}
