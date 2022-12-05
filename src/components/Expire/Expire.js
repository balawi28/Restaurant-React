import React, { useEffect, useState } from 'react';

export default function Expire({ delay, active, clear, children }) {
	const [visible, setVisible] = useState(active);

	useEffect(() => {
		clear();
		const timer = setTimeout(() => {
			setVisible(false);
		}, delay);
		return () => clearTimeout(timer);
	}, [delay, clear]);

	return visible ? <div>{children}</div> : null;
}
