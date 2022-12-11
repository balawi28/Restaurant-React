import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import './NavIcon.scss';

export default function NavIcon() {
	const [isLightMode, setIsLightMode] = useState(true);
	return (
		<div className='cart-icon'>
			<button
				onClick={() => {
					setIsLightMode((isLightMode) => !isLightMode);
				}}
			>
				<SVG
					src={require(`../../icons/${
						isLightMode ? 'sun.svg' : 'moon.svg'
					}`)}
				/>
			</button>
		</div>
	);
}
