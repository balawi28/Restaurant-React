import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardActions } from '../../store';
import { BooleanField, DropDownField, InputField } from './Dashboard';

export default function MenuAdder() {
	const dispatch = useDispatch();
	const dashboard = useSelector((state) => state.dashboard);

	const [menuId, setMenuId] = useState(1);
	const [food, setFood] = useState('');
	const [basePrice, setBasePrice] = useState('');
	const [title, setTitle] = useState('');
	const [visible, setVisible] = useState(false);

	function submitHandler() {
		dispatch(
			dashboardActions.add({
				data: {
					basePrice,
					title,
					visible,
					food,
				},
				path: `menu/${menuId}/menuItem`,
			})
		);
	}

	return (
		<div className='bg-white dark:bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl'>
			<legend className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'>
				{`Add Menu Item`}
			</legend>

			<DropDownField
				label={'Choose Menu to Add to.'}
				options={dashboard.menu}
				idName={'id'}
				labelName={'title'}
				setValue={setMenuId}
			/>

			<DropDownField
				label={'Choose Which Type of Food.'}
				options={dashboard.food}
				idName={'foodName'}
				labelName={'foodName'}
				setValue={setFood}
			/>

			<InputField
				type='number'
				text='base Price'
				onChange={(e) => setBasePrice(e.target.value)}
			/>
			<InputField
				text='Title'
				onChange={(e) => setTitle(e.target.value)}
			/>

			<BooleanField
				label='Visible'
				value={visible}
				onChange={() => setVisible((checked) => !checked)}
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
