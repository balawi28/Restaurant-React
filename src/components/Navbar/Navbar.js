import cx from 'classnames';
import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import { NavLink, useNavigate } from 'react-router-dom';
import CartIcon from './CartIcon';
import HamburgerMenu from './HamburgerMenu';
import './Navbar.scss';
import NavIcon from './NavIcon';

export default function Navbar() {
	// const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const [clicked, setClicked] = useState(false);
	// const dispatch = useDispatch();
	const navigate = useNavigate();

	// function logoutHandler() {
	// 	dispatch(authActions.logout());
	// 	navigate('/login');
	// }
	const logoFilename = 'logo.svg';
	return (
		<nav>
			<HamburgerMenu clicked={clicked} setClicked={setClicked} />

			<NavLink to='/'>
				<SVG
					className='logo'
					src={require(`../../icons/${logoFilename}`)}
				/>
			</NavLink>

			<div className={cx({ 'mobile-menu': clicked })}>
				<NavLink end to='/'>
					Home
				</NavLink>
				<NavLink to='/orders'>Orders</NavLink>
				{/* <NavLink to='/signup'>Signup</NavLink> */}
				{/* <NavLink to='/dashboard'>Dashboard</NavLink> */}
				{/* {isLoggedIn ? (
					<button onClick={logoutHandler}>Logout</button>
				) : (
					<NavLink to='/login'>Login</NavLink>
				)} */}
				{/* <NavLink to='/pizza'>Pizza</NavLink> */}
			</div>
			<NavIcon></NavIcon>

			<CartIcon onClick={() => navigate('/cart')} />
		</nav>
	);
}
