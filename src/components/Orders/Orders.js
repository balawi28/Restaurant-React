import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconOrder } from '../../icons/order.svg';
import { ReactComponent as Trash } from '../../icons/trash.svg';
import { orderActions } from '../../store';
import EmptyPage from '../EmptyPage/EmptyPage';
import './Orders.scss';

export default function Orders() {
	const orders = useSelector((state) => state.order.orders);
	const { get, cancel } = orderActions;
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		dispatch(get());
	}, [dispatch, get]);

	return orders.length > 0 ? (
		<table className='orders'>
			<thead>
				<tr>
					<th>ID</th>
					<th>Price</th>
					<th>date</th>
					<th>Status</th>
					<th>Cancel</th>
				</tr>
			</thead>
			<tbody>
				{orders.map(({ id, date, status, price }) => (
					<tr className={status} key={id}>
						<td>{id}</td>
						<td>{'₪'}</td>
						<td>{date.substring(0, 10)}</td>
						<td>{status}</td>
						<td onClick={() => dispatch(cancel(id))}>
							<Trash />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	) : (
		<EmptyPage
			buttonText='Order Something!'
			title='No orders yet!'
			Icon={IconOrder}
			navigateURL={'/'}
		/>
	);
}
