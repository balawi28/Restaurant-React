import React from 'react';
import { useDispatch } from 'react-redux';
import { orderDraftActions } from '../../store';
import './Ingredient.scss';

export default function Ingredient({ food, name, price, imageDirectory }) {
	const dispatch = useDispatch();

	function addHandler() {
		dispatch(orderDraftActions.add({ food, name, price, imageDirectory }));
	}

	return (
		<div className='ingredient' onClick={addHandler}>
			<img src={require(`../../icons/${imageDirectory}`)} alt={name} />
			<p>{name}</p>
			<button>
				<span>{price + '₪'}</span>
			</button>
		</div>
	);
}
