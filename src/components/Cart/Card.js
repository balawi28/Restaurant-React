import cx from 'classnames';
import React from 'react';
import './Card.scss';

export default function Card({ label, details, Icon, checked, hovered }) {
	return (
		<div className={cx({ card: true, checked, hovered })}>
			<Icon />
			<h4>{label}</h4>
			<p>{details}</p>
		</div>
	);
}
