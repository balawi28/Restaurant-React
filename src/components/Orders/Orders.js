import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Trash } from '../../icons/trash.svg';
import './Orders.css';

export default function Orders() {
	const orders = useSelector((state) => state.order.orders);
	const dispatch = useDispatch();
	return (
		<table className='orders'>
			<thead>
				<tr>
					<th>Order ID</th>
					<th>Price</th>
					<th>Discount</th>
					<th>Order Status</th>
					<th>Cancel Order</th>
				</tr>
			</thead>
			<tbody>
				{orders.length ? (
					orders.map(({ id, elements, discount, status, price }) => (
						<tr key={id}>
							<td
								style={{
									backgroundColor: status ? '' : '#fe4141',
								}}
							>
								{id}
							</td>
							<td
								style={{
									backgroundColor: status ? '' : '#fe4141',
								}}
							>
								{price + '₪'}
							</td>
							<td
								style={{
									backgroundColor: status ? '' : '#fe4141',
								}}
							>
								{discount ? 'Discount Applied' : 'No Discount'}
							</td>
							<td
								style={{
									backgroundColor: status ? '' : '#fe4141',
								}}
							>
								{status ? 'In Progress' : 'Canceled'}
							</td>
							<td onClick={() => dispatch()}>
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
