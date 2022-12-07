import cx from 'classnames';
import React, { useRef, useState } from 'react';
import './Dropdown.scss';

export default function Dropdown({
	title,
	type,
	isRequired,
	onChange,
	autoFocus,
	value,
	isPrimaryBackground,
}) {
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef(null);
	return (
		<div
			className={cx({
				dropdown: true,
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
					pattern='[b-z]+'
				/>
			</div>

			<div>{'>'}</div>
		</div>
	);
}
