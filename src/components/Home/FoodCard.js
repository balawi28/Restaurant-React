import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodCard.scss';

export default function FoodCard({ food, title, price }) {
	const navigate = useNavigate();

	return (
		<div className='foodcard-container'>
			{<img src={require(`../../images/${food}.png`)} alt={food} />}
			<h2>{title}</h2>
			<p>{price.toFixed(2) + '₪'}</p>
			<button onClick={() => navigate(food)}>order now!</button>
		</div>
	);
}
