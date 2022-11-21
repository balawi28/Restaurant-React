import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as IconRemove } from '../../icons/remove.svg';
import { orderDraftActions } from '../../store';
import './OrderIngredient.css';

export default function OrderIngredient({
	food,
	name,
	price,
	removable,
	imageDirectory,
}) {
	const dispatch = useDispatch();

	function removeHandler() {
		if (removable)
			dispatch(orderDraftActions.remove({ food, name, price }));
	}

	return (
		<div className='order-ingredient'>
			<img src={require(`../../icons/${imageDirectory}`)} alt={name} />
			<p>{name + ': ' + (removable ? price + '₪' : 'Base Price')}</p>
			<IconRemove
				onClick={removeHandler}
				className={removable ? 'removable' : 'unremovable'}
			/>
		</div>
	);
}
