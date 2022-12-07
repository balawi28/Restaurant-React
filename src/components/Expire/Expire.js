import React, { useEffect, useState } from 'react';

export default function Expire({ delay, active, children }) {
	const [visible, setVisible] = useState(active);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
		}, delay);
		return () => clearTimeout(timer);
	}, [delay]);

	return visible ? <div>{children}</div> : null;
}
