import cx from 'classnames';
import React from 'react';
import './HamburgerMenu.scss';
export default function HamburgerMenu({ clicked, setClicked }) {
	return (
		<div
			className={cx({
				'hamburger-menu': true,
				'hamburger-menu-close': clicked,
			})}
			onClick={() => setClicked((clicked) => !clicked)}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}
