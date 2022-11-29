import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as IconBox } from '../../icons/box.svg';
import { ReactComponent as IconDelivery } from '../../icons/delivery.svg';
import { ReactComponent as IconStore } from '../../icons/store.svg';
import AnonymousUserForm from '../AnonymousUserForm/AnonymousUserForm';
import Card from '../Cart/Card';
import Option from '../Option/Option';
import Options from '../Option/Options';

export default function DeliveryChoice() {
	const { isLoggedIn } = useSelector((state) => state.auth);
	const [choice, setChoice] = useState(-1);

	return (
		<div className='delivery-choice'>
			<Options
				groupId={'order-type'}
				choice={choice}
				setChoice={setChoice}
			>
				<Option>
					<Card
						label={'delivery'}
						details={'2$'}
						Icon={IconDelivery}
					/>
				</Option>
				<Option>
					<Card label={'pickup'} details={'free'} Icon={IconBox} />
				</Option>
				<Option>
					<Card label={'dining'} details={'2$'} Icon={IconStore} />
				</Option>
			</Options>

			<div>{+choice === 0 && !isLoggedIn && <AnonymousUserForm />}</div>
			<div>{+choice === 1 && !isLoggedIn}</div>
			<div>{+choice === 2 && !isLoggedIn}</div>
		</div>
	);
}
