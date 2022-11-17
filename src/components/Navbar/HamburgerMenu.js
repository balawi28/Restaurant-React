import React from 'react';
import './HamburgerMenu.css';
export default function HamburgerMenu() {
	return (
		<div className='hamburger-menu'>
			<input type='checkbox' id='hamburger' />
			<label for='hamburger' className='hamburger'>
				<span className='line'></span>
				<span className='line'></span>
				<span className='line'></span>
			</label>
		</div>
	);
}
