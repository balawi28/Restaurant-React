import React, { useState } from 'react';
import './Option.scss';

export default function Option({
	groupId,
	index,
	checked,
	onChange,
	children,
}) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className='option'
			onMouseOver={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<label htmlFor={index}></label>
			<input
				type='radio'
				name={groupId}
				id={index}
				value={index}
				checked={checked}
				onChange={onChange}
			/>
			{React.Children.map(children, (child) =>
				React.cloneElement(child, { checked, hovered })
			)}
		</div>
	);
}
