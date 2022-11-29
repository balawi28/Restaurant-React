import cx from 'classnames';
import React, { useState } from 'react';
import './HamburgerMenu.scss';
export default function HamburgerMenu() {
	const [clicked, setClicked] = useState(false);
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
