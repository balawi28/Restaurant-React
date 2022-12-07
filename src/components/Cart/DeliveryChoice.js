import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconBox } from '../../icons/box.svg';
import { ReactComponent as IconDelivery } from '../../icons/delivery.svg';
import { ReactComponent as IconStore } from '../../icons/store.svg';
import { cartActions } from '../../store';
import Card from '../Cart/Card';
import FormField from '../Form/FormField';
import Option from '../Option/Option';
import Options from '../Option/Options';
import AnonymousUserForm from './AnonymousUserForm';
import './DeliveryChoice.scss';

export default function DeliveryChoice() {
	const { anonymousUser } = useSelector((state) => state.cart);
	const { isLoggedIn } = useSelector((state) => state.auth);
	const [choice, setChoice] = useState(-1);
	const dispatch = useDispatch();

	useEffect(() => {
		const types = ['delivery', 'pickup', 'reservation'];
		dispatch(cartActions.setType(types[choice]));
	}, [choice, dispatch]);

	function setUser(e, property) {
		dispatch(
			cartActions.setAnonymousUser({ value: e.target.value, property })
		);
	}

	return (
		<div className='delivery-choice'>
			<FormField
				title='name'
				type='text'
				isRequired={true}
				onChange={(e) => setUser(e, 'name')}
				autoFocus={false}
				value={anonymousUser.name}
				isPrimaryBackground={true}
			/>
			<FormField
				title='mobile'
				type='number'
				isRequired={true}
				onChange={(e) => setUser(e, 'mobile')}
				autoFocus={false}
				value={anonymousUser.mobile}
				isPrimaryBackground={true}
			/>
			<Options
				groupId={'order-type'}
				choice={choice}
				setChoice={setChoice}
			>
				<Option>
					<Card
						label={'delivery'}
						details={'2₪'}
						Icon={IconDelivery}
					/>
				</Option>
				<Option>
					<Card label={'pickup'} details={'free'} Icon={IconBox} />
				</Option>
				<Option>
					<Card
						label={'reservation'}
						details={'2₪'}
						Icon={IconStore}
					/>
				</Option>
			</Options>

			{+choice === 0 && !isLoggedIn && <AnonymousUserForm />}
		</div>
	);
}
