import React from 'react';
import './Option.scss';

export default function Option({ label, Icon, groupId, index }) {
	const optionId = '' + groupId + index;
	return (
		<div className='option'>
			<label htmlFor={optionId}> </label>
			<input type='radio' name={groupId} id={optionId} />
			<div>
				<Icon />
				<h4>{label}</h4>
				<p>50₪</p>
			</div>
		</div>
	);
}
