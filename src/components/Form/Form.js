import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../icons/identity.svg';
import './Form.css';
import './FormButtonWrapper.css';
import './FormField.css';

export function Form(props) {
	return (
		<form
			//style={isEmpty ? { filter: 'blur(4px)' } : { filter: 'blur(0px)' }}
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			{props.children}
		</form>
	);
}

export function FormField({
	title,
	type,
	isRequired,
	onChange,
	autoFocus,
	value,
	backgroundColor,
}) {
	const [border, setBorder] = useState(false);

	return (
		<div
			className={`form-field ${border ? 'bordered' : 'unbordered'}`}
			style={{ backgroundColor: backgroundColor }}
		>
			<label htmlFor={title}>{title}</label>
			<input
				type={type}
				name={title}
				id={title}
				required={isRequired}
				onChange={onChange}
				onFocus={() => setBorder(!border)}
				onBlur={() => setBorder(!border)}
				autoFocus={autoFocus}
				value={value}
			/>
			<div>
				<Logo />
			</div>
		</div>
	);
}

export function FormButtonWrapper(props) {
	return <div className='FormButtonWrapper'>{props.children}</div>;
}
