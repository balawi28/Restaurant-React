import _ from 'lodash';
import React, { useLayoutEffect } from 'react';
import SVG from 'react-inlinesvg';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantInfoActions } from '../../store';
import './Footer.scss';

export default function Footer() {
	const dispatch = useDispatch();
	const { restaurantInfo } = useSelector((state) => state.restaurantInfo);

	useLayoutEffect(() => {
		dispatch(restaurantInfoActions.get());
	}, [dispatch]);

	return (
		<footer>
			{_.map(restaurantInfo, ({ label, data, iconFilename }) => (
				<FooterElement
					title={label}
					data={data}
					icon={iconFilename}
					key={label}
				/>
			))}
		</footer>
	);
}

function FooterElement({ title, data, icon }) {
	return (
		<div className='footer-element'>
			<SVG src={require(`../../icons/${icon}`)}></SVG>
			<div>
				<h3>{title}</h3>
				<p>{data}</p>
			</div>
		</div>
	);
}
