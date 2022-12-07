import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../slices/cart.slice';
import Form from '../Form/Form';
import FormField from '../Form/FormField';

export default function AnonymousUserForm() {
	const { anonymousUser } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	function setUser(e, property) {
		dispatch(
			cartActions.setAnonymousUser({ value: e.target.value, property })
		);
	}

	return (
		<div style={{ width: '100%' }}>
			<Form>
				<FormField
					title='address'
					type='text'
					isRequired={true}
					onChange={(e) => setUser(e, 'address')}
					autoFocus={false}
					value={anonymousUser.address}
					isPrimaryBackground={true}
				/>
			</Form>
		</div>
	);
}
