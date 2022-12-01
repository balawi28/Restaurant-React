import cx from 'classnames';
import React, { useRef, useState } from 'react';
import { ReactComponent as Logo } from '../../icons/identity.svg';
import './FormField.scss';

export default function FormField({
	title,
	type,
	isRequired,
	onChange,
	autoFocus,
	value,
	isPrimaryBackground,
	Icon = Logo,
}) {
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef(null);

	return (
		<div
			className={cx({
				'form-field': true,
				focused: isFocused,
				'primary-background': isPrimaryBackground,
			})}
			onClick={() => inputRef.current.focus()}
		>
			<div>
				<label htmlFor={title}>{title}</label>
				<input
					type={type}
					name={title}
					id={title}
					required={isRequired}
					onChange={onChange}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					autoFocus={autoFocus}
					value={value}
					ref={inputRef}
				/>
			</div>

			<div>
				<Icon />
			</div>
		</div>
	);
}
