import React from 'react';
import './Options.scss';

export default function Options({ children, groupId }) {
	return (
		<div className='options'>
			<h2>Choose your delivery option</h2>
			{/* <div className='options-wrapper'>{children}</div> */}
			<div className='options-wrapper'>
				{React.Children.map(children, (child, index) =>
					React.cloneElement(child, {
						groupId,
						index,
					})
				)}
			</div>

			{/* {React.Children.map(
				children,
				(child) => (child.props.groupId = groupId)
			)} */}
		</div>
	);
}
