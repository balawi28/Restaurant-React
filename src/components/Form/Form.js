import React from 'react';
import './Form.scss';

export default function Form(props) {
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
