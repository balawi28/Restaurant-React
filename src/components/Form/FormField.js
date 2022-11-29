import cx from 'classnames';
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../icons/identity.svg';
import './FormField.scss';

export default function FormField({
	title,
	type,
	isRequired,
	onChange,
	autoFocus,
	value,
}) {
	const [border, setBorder] = useState(false);

	return (
		<div className={cx({ 'form-field': true, bordered: border })}>
			<label htmlFor={title}>{title}</label>
			<input
				type={type}
				name={title}
				id={title}
				required={isRequired}
				onChange={onChange}
				onFocus={() => setBorder(true)}
				onBlur={() => setBorder(false)}
				autoFocus={autoFocus}
				value={value}
			/>
			<div>
				<Logo />
			</div>
		</div>
	);
}
