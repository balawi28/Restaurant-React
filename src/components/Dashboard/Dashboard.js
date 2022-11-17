import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardActions } from '../../store';
import FoodAdder from './FoodAdder';
import FoodRemover from './FoodRemover';
import MenuItemAdder from './MenuItemAdder';
import MenuItemRemover from './MenuItemRemover';
export default function Dashboard() {
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.dashboard);

	useEffect(() => {
		dispatch(
			dashboardActions.get({
				path: 'menu',
			})
		);
		dispatch(
			dashboardActions.get({
				path: 'food',
			})
		);
		dispatch(
			dashboardActions.get({
				path: 'menuItem',
			})
		);
	}, [dispatch]);

	return (
		<div
			className={
				(isLoading ? 'invisible' : 'visible') +
				' flex gap-8 items-start'
			}
		>
			<FoodAdder />
			<FoodRemover />
			<MenuItemAdder />
			<MenuItemRemover />
		</div>
	);
}

export function InputField({ type = 'text', text, onChange }) {
	return (
		<div>
			<div className='mb-6'>
				<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
					{text}
				</label>
				<input
					type={type}
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					required
					onChange={onChange}
				/>
			</div>
		</div>
	);
}

export function BooleanField({ label, value, onChange }) {
	return (
		<div className='flex items-start mb-6'>
			<div className='flex items-center h-5'>
				<input
					type='checkbox'
					checked={value}
					onChange={onChange}
					className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
					required
				/>
			</div>
			<label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
				{label}
			</label>
		</div>
	);
}

export function DropDownField({ label, idName, labelName, options, setValue }) {
	return (
		<div>
			<label className='inline-block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
				{label}
			</label>
			<select
				className='w-full h-9 mb-7 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
				onChange={(e) => setValue(e.target.value)}
				defaultValue={'DEFAULT'}
			>
				<option
					className='text-slate-500'
					value='DEFAULT'
					hidden
					disabled
				></option>
				{options
					? options.map((option) => (
							<option value={option[idName]} key={option[idName]}>
								{option[labelName]}
							</option>
					  ))
					: null}
			</select>
		</div>
	);
}
