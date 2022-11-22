import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Trash } from '../../icons/trash.svg';
import { orderActions } from '../../store';
import './Orders.css';

export default function Orders() {
	const orders = useSelector((state) => state.order.orders);
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		dispatch(orderActions.get());
	}, [dispatch]);
	return (
		<table className='orders'>
			<thead>
				<tr>
					<th>Order ID</th>
					<th>Price</th>
					<th>date</th>
					<th>Status</th>
					<th onClick={() => dispatch(orderActions.cancel(9))}>
						Cancel
					</th>
				</tr>
			</thead>
			<tbody>
				{orders.length ? (
					orders.map(({ id, date, status, price }) => (
						<tr className={status} key={id}>
							<td>{id}</td>
							<td>{'₪'}</td>
							<td>{date.substring(0, 10)}</td>
							<td>{status}</td>
							<td
								onClick={() =>
									dispatch(orderActions.cancel(id))
								}
							>
								<Trash className='Orders-Trash' />
							</td>
						</tr>
					))
				) : (
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td>‌</td>
					</tr>
				)}
			</tbody>
		</table>
	);
}
