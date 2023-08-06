import React, { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
	const {
		mainId,
		displayName,
		price,
		quantity,
	} = props;

	const { decQuantity, incQuantity, removeFromBasket } = useContext(ShopContext);

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