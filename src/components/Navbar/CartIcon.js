import { useSelector } from 'react-redux';
import { ReactComponent as IconCart } from '../../icons/cart.svg';
import './CartIcon.css';

export default function CartIcon({ onClick }) {
	const { cart } = useSelector((state) => state.cart);
	return (
		<div className='cart-icon'>
			<button onClick={onClick}>
				<IconCart />
				{cart.length > 0 && (
					<span>
						<div>{cart.length}</div>
					</span>
				)}
			</button>
		</div>
	);
}
