import { useSelector } from 'react-redux';
import { ReactComponent as IconCart } from '../../icons/cart.svg';
import './CartIcon.css';

export default function CartIcon({ onClick }) {
	const { count } = useSelector((state) => state.cart);
	return (
		<div className='cart-icon'>
			<button onClick={onClick}>
				<IconCart />
				{count > 0 && (
					<span>
						<div>{count}</div>
					</span>
				)}
			</button>
		</div>
	);
}
