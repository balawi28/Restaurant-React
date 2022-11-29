import React from 'react';
import './Options.scss';

export default function Options({ groupId, choice, setChoice, children }) {
	return (
		<div className='options'>
			<h2>Choose your delivery option</h2>
			<div className='options-wrapper'>
				{React.Children.map(children, (child, index) =>
					React.cloneElement(child, {
						groupId,
						index,
						checked: +choice === index,
						onChange: (e) => setChoice(e.target.value),
					})
				)}
			</div>
		</div>
	);
}
