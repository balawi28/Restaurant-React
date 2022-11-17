import React from 'react';
import './Offer.css';

export default function Offer({ image, name, percentage, elements }) {
	//const dispatch = useDispatch();

	function handleAdd() {
		//dispatch(setElements(elements));
		//dispatch(addDiscount(percentage));
	}

	return (
		<div className='Offer'>
			<p className='Offer-Mark'>Offer</p>
			<p className='Offer-Value'>{percentage + '%'}</p>
			<p className='Offer-Add' onClick={() => handleAdd()}>
				Order now!
			</p>
			<img src={image} alt={name}></img>
			<h2>{name}</h2>
		</div>
	);
}
