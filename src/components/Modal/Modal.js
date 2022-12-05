import cx from 'classnames';
import React from 'react';
import { ReactComponent as IconFailure } from '../../icons/failure.svg';
import { ReactComponent as IconSuccess } from '../../icons/success.svg';
import './Modal.scss';

export default function Notification({ success, successText, failureText }) {
	return (
		<div className='modal'>
			<div className={cx({ success })}>
				{success ? <IconSuccess /> : <IconFailure />}
				<p> {success ? successText : failureText}</p>
			</div>
		</div>
	);
}
