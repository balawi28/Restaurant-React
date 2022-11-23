import React from 'react';
import './IngredientTag.scss';

export default function IngredientTag({ label, imageDirectory, qunatity }) {
	return (
		<div className='ingredient-tag'>
			<img src={require(`../../icons/${imageDirectory}`)} alt={label} />
			<label>{label}</label>
			<div>{qunatity}</div>
		</div>
	);
}
