import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store';
import { Form, FormButtonWrapper, FormField } from '../Form/Form';
import Spinner from '../Spinner/Spinner';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLoggedIn, isLoading } = useSelector((state) => state.auth);

	const loginHandle = () => {
		dispatch(authActions.login({ username, password }));
	};

	useEffect(() => {
		if (isLoggedIn) navigate('/');
	}, [isLoggedIn, navigate]);

	return !isLoading ? (
		<Form>
			<h1>Login.</h1>
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
				<button onClick={loginHandle} type='button'>
					Login
				</button>
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
	) : (
		<Spinner />
	);
}
