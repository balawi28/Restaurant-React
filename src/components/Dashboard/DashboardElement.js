// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { dashboardActions } from '../../store';

// export default function DashboardElement({ data }) {
// 	const dispatch = useDispatch();
// 	const [fields, setFields] = useState([]);

// 	useEffect(() => {
// 		setFields((fields) => [
// 			...fields,
// 			{ text: 'Food Name', type: 'string' },
// 		]);
// 	}, []);

// 	function submitHandler() {
// 		dispatch(
// 			dashboardActions.add({
// 				data: { foodName: 'aaa', basePrice: 2.2 },
// 				path: 'food/add',
// 			})
// 		);
// 	}

// 	return (
// 		<div className='bg-white dark:bg-slate-800 rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl'>
// 			<legend className='block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300'>
// 				{`Add ${'AAA'}`}
// 			</legend>
// 			{data.map((field) =>
// 				field.type === 'string' ? (
// 					<StringField key={field.id} text={field.text} />
// 				) : (
// 					<BooleanField key={field.id} text={field.text} />
// 				)
// 			)}
// 			<button
// 				type='submit'
// 				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
// 				onClick={submitHandler}
// 			>
// 				Submit
// 			</button>
// 		</div>
// 	);
// }

// function StringField({ text }) {
// 	return (
// 		<div>
// 			<div className='mb-6'>
// 				<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
// 					{text}
// 				</label>
// 				<input
// 					type='text'
// 					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
// 					placeholder='name@flowbite.com'
// 					required
// 				/>
// 			</div>
// 		</div>
// 	);
// }

// function BooleanField({ clickHandler }) {
// 	return (
// 		<div className='flex items-start mb-6'>
// 			<div className='flex items-center h-5'>
// 				<input
// 					type='checkbox'
// 					value=''
// 					className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
// 					required
// 				/>
// 			</div>
// 			<label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
// 				Remember me
// 			</label>
// 		</div>
// 	);
// }
