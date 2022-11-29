import React, { useState } from 'react';
import Form from '../Form/Form';
import FormField from '../Form/FormField';
import './AnonymousUserForm.scss';

export default function AnonymousUserForm() {
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');

	return (
		<div className='anonymous-user-form'>
			<Form>
				<FormField
					title='name'
					type='text'
					isRequired={true}
					onChange={(e) => setName(e.target.value)}
					autoFocus={false}
					value={name}
				/>
				<FormField
					title='address'
					type='text'
					isRequired={true}
					onChange={(e) => setAddress(e.target.value)}
					autoFocus={false}
					value={address}
				/>
			</Form>
		</div>
	);
}
