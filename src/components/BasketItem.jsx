import React from 'react';

function BasketItem(props) {
	const {
		mainId,
		displayName,
		price,
		quantity,
		removeFromBasket = Function.prototype,
		incQuantity = Function.prototype,
		decQuantity = Function.prototype,
	} = props;

	return (
		<li className='collection-item'>
			{displayName}{' '}
			<i
				className='Tiny material-icons uncopy'
				onClick={() => decQuantity(mainId)}
			>
				arrow_downward
			</i>{' '}
			x{quantity}{' '}
			<i
				className='Tiny material-icons uncopy'
				onClick={() => incQuantity(mainId)}
			>
				arrow_upward
			</i>{' '}
			= {quantity * price} руб.
			<span
				className='secondary-content black-text uncopy'
				onClick={() => removeFromBasket(mainId)}
			>
				<i className='small material-icons uncopy'>delete</i>
			</span>
		</li>
	);
}

export { BasketItem };