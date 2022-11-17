import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardActions } from '../../store';
import { DropDownField } from './Dashboard';

export default function FoodRemover() {
	const foodMenu = useSelector((state) => state.food.foodMenu);
	const dispatch = useDispatch();
	const [foodName, setFoodName] = useState('');

	function submitHandler() {
		dispatch(
			dashboardActions.remove({
				path: `food/${foodName}`,
			})
		);
	}

	return (
		<div className='bg-white dark:bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl'>
			<legend className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'>
				{`Remove Food`}
			</legend>
			<DropDownField
				label={'Choose Menu to Add to.'}
				options={foodMenu}
				idName={'foodName'}
				labelName={'foodName'}
				setValue={setFoodName}
			/>
			<button
				type='submit'
				className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-900'
				onClick={submitHandler}
			>
				Remove
			</button>
		</div>
	);
}
