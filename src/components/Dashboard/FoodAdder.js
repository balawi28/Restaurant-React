import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dashboardActions } from '../../store';
import { InputField } from './Dashboard';

export default function FoodAdder() {
	const dispatch = useDispatch();
	const [foodName, setFoodName] = useState('');

	function submitHandler() {
		dispatch(
			dashboardActions.add({
				data: { foodName },
				path: 'food',
			})
		);
	}

	return (
		<div className='bg-white dark:bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl'>
			<legend className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'>
				{`Add Food`}
			</legend>
			<InputField
				text='Foodname'
				onChange={(e) => setFoodName(e.target.value)}
			/>
			<button
				type='submit'
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				onClick={submitHandler}
			>
				Submit
			</button>
		</div>
	);
}
