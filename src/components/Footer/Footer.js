import _ from 'lodash';
import React from 'react';
import { ReactComponent as IconLocation } from '../../icons/location.svg';
import { ReactComponent as IconTelephone } from '../../icons/telephone.svg';
import { ReactComponent as IconUser } from '../../icons/user.svg';
import './Footer.css';
import './FooterElement.css';

function FooterElement({ title, data, Icon }) {
	return (
		<div id='footer-element'>
			<div>
				<Icon id='footer-element-icon' />
				<div>
					<h3>{title.toUpperCase()}</h3>
					{_.map(data, (string) => (
						<pre key={string}>{string}</pre>
					))}
				</div>
			</div>
		</div>
	);
}

export default function Footer() {
	return (
		<footer>
			<div>
				<div>
					<FooterElement
						title='Contact Us'
						data={['burger@mail.com', '00972595662147']}
						Icon={IconTelephone}
					/>
					<FooterElement
						title='Our Location'
						data={['Al-Masyon, Ramallah', 'PO Box 23253 ']}
						Icon={IconLocation}
					/>
					<FooterElement
						title='About Us'
						data={['Burger Restaurant', 'New Methods']}
						Icon={IconUser}
					/>
				</div>
			</div>
		</footer>
	);
}
