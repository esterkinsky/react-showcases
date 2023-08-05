import React, { useEffect } from 'react';

export default function Alert(props) {
	const { displayName = '', closeAlert = Function.prototype } = props;

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 3000);

		return () => {
			clearTimeout(timerId);
		};
	}, [displayName]);

	return (
		<div id='toast-container'>
			<div className='toast pink lighten-4'>{displayName} добавлен в корзину</div>
		</div>
	);
}