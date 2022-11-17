import React from 'react';
import { useDispatch } from 'react-redux';
import { orderDraftActions } from '../../store';

import './Element.css';
export default function Element({ food, name, price }) {
	const dispatch = useDispatch();

	function addHandler() {
		dispatch(orderDraftActions.add({ food, name, price }));
	}

	return (
		<div className='element'>
			<img src={require(`../../icons/${food}-${name}.svg`)} alt={name} />
			<p>{name}</p>
			<button onClick={addHandler}>
				<span>{price + '₪'}</span>
			</button>
		</div>
	);
}
