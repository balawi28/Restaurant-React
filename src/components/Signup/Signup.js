import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import URL from '../../urls.json';
import { Form, FormButtonWrapper, FormField } from '../Form/Form';

export default function Signup() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const submitButton = () => {
		axios
			.post(
				URL.BASE + 'signup',
				{
					username: username,
					password: password,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						authorization: localStorage.getItem('JWT'),
					},
				}
			)
			.then(function (response) {
				alert(response.headers.authorization);
				localStorage.setItem('JWT', response.headers.authorization);
				navigate('/');
			})
			.catch(function (error) {
				alert(error);
			});
	};

	return (
		<Form>
			<h1>Signup.</h1>

			<FormField
				title='Username'
				type='text'
				isRequired={true}
				onChange={(e) => setUsername(e.target.value)}
				autoFocus={true}
				value={username}
			/>
			<FormField
				title='Password'
				type='password'
				isRequired={true}
				onChange={(e) => setPassword(e.target.value)}
				autoFocus={false}
				value={password}
			/>

			<FormButtonWrapper>
				<button onClick={submitButton}>Signup</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						setPassword('');
						setUsername('');
					}}
				>
					Clear
				</button>
			</FormButtonWrapper>
		</Form>
	);
}
