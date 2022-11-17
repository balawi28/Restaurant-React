import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import FoodCard from './FoodCard';
import './Home.css';

export default function Home() {
	const { menus } = useSelector((state) => state.menu);
	return (
		<div className='home'>
			{_.map(menus, (menu) => (
				<menu className='menu' key={menu.id}>
					<h1>{menu.title + ' menu'}</h1>
					{_.map(menu.menuItems, (menuItem) => (
						<FoodCard
							key={menuItem.id}
							name={menuItem.food}
							title={menuItem.food}
							price={menuItem.basePrice}
						/>
					))}
				</menu>
			))}
		</div>
	);
}
