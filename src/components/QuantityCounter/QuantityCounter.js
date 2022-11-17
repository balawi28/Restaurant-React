import React from 'react';
import './QuantityCounter.css';

export default function QuantityCounter({
	count,
	change,
	increment,
	decrement,
}) {
	return (
		<div>
			<div className='quantity-counter'>
				<button onClick={increment}>+</button>
				<input
					type='number'
					value={count}
					onChange={(e) => change(e.target.value)}
				/>
				<button onClick={decrement}>-</button>
			</div>
		</div>
	);
}
