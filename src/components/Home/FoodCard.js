import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodCard.css';

export default function FoodCard({ name, title, price }) {
	const navigate = useNavigate();

	return (
		<div className='foodcard-container'>
			{<img src={require(`../../images/${name}.png`)} alt={name} />}
			<h2>{title}</h2>
			<p>{price.toFixed(2) + '₪'}</p>
			<button onClick={() => navigate('/burger')}>Order Now!</button>
		</div>
	);
}
