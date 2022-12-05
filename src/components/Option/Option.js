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
	const [focused, setFocused] = useState(false);

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
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
			/>
			{React.Children.map(children, (child) =>
				React.cloneElement(child, {
					checked,
					hovered,
					focused,
				})
			)}
		</div>
	);
}
