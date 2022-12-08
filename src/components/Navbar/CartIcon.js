import SVG from 'react-inlinesvg';
import { useSelector } from 'react-redux';
import './CartIcon.scss';

export default function CartIcon({ onClick }) {
	const { cart } = useSelector((state) => state.cart);
	let logoFilename = 'cart.svg';
	return (
		<div className='cart-icon'>
			<button onClick={onClick}>
				<SVG src={require(`../../icons/${logoFilename}`)} />
				{cart.length > 0 && (
					<span>
						<div>{cart.length}</div>
					</span>
				)}
			</button>
		</div>
	);
}
