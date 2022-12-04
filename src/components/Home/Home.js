import _ from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store';
import DeliveryChoice from '../Cart/DeliveryChoice';
import FoodCard from './FoodCard';
import './Home.scss';

export default function Home() {
	const { menus } = useSelector((state) => state.menu);
	const { cart, anonymousUser } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	function submitOrder() {
		dispatch(cartActions.postCart(cart, anonymousUser));
	}

	return (
		<div className='home'>
			{_.map(menus, (menu) => (
				<menu className='menu' key={menu.id}>
					<h1>{menu.title + ' menu'}</h1>
					{_.map(menu.menuItems, (menuItem) => (
						<FoodCard
							key={menuItem.id}
							food={menuItem.food}
							title={menuItem.title}
							price={menuItem.basePrice}
						/>
					))}
				</menu>
			))}
			<DeliveryChoice />

			<button onClick={submitOrder}></button>
		</div>
	);
}
