import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmptyPage.scss';

export default function EmptyPage({ title, buttonText, Icon, navigateURL }) {
	const navigate = useNavigate();

	return (
		<div className='empty-page'>
			<Icon />
			<h2>{title}</h2>
			<button onClick={() => navigate(navigateURL)}>{buttonText}</button>
		</div>
	);
}
