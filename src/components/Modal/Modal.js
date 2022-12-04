import React from 'react';
import './Modal.scss';

export default function Notification({ Icon, text }) {
	return (
		<div className='modal'>
			<div>
				<Icon />
				<p>{text}</p>
			</div>
		</div>
	);
}
