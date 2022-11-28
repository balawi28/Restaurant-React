import React from 'react';
import ImageOffer1 from '../../images/offer1.png';
import ImageOffer2 from '../../images/offer2.png';
import ImageOffer3 from '../../images/offer3.png';
import IngredientAdder from '../IngredientAdder/IngredientAdder';
import Offer from '../Offer/Offer';
import Order from '../Order/Order';
import './FoodPage.scss';

export default function FoodPage({ foodName }) {
	return (
		<div className='food-page'>
			<div>
				<IngredientAdder foodName={foodName} />
				<Order foodName={foodName} />
			</div>
			<div>
				{getOffers().map((offer, index) => (
					<Offer {...offer} key={index} />
				))}
			</div>
		</div>
	);
}

function getOffers() {
	return [
		{
			image: ImageOffer1,
			name: 'Double Mushroom Burger',
			percentage: 25,
			elements: ['Mushroom', 'Cheese', 'Mushroom', 'Tomato'],
		},

		{
			image: ImageOffer2,
			name: 'Lettuce Burger',
			percentage: 30,
			elements: ['Lettuce', 'Cheese', 'Lettuce', 'Tomato', 'Leaf'],
		},

		{
			image: ImageOffer3,
			name: 'Triple Beef Burger',
			percentage: 35,
			elements: ['Mushroom', 'Cheese', 'Lettuce', 'Tomato'],
		},
	];
}
