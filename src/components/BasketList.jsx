import React from 'react';
import { BasketItem } from './BasketItem';

export default function BasketList(props) {
	const {
		order = [],
		handleBasketShow = Function.prototype,
		removeFromBasket = Function.prototype,
		decQuantity,
		incQuantity,
	} = props;

	const totalPrice = order.reduce((sum, el) => {
		return (sum + el.price * el.quantity);
	}, 0);

	return (
		<ul className='collection basket-list pink lighten-1'>
			<li className='collection-item active pink lighten-1'>Корзина</li>
			{order.length ? (
				order.map((item) => (
					<BasketItem
						key={item.mainId}
						removeFromBasket={removeFromBasket}
						decQuantity={decQuantity}
						incQuantity={incQuantity}
						{...item}
					/>
				))
			) : (
				<li className='collection-item'>Корзина пуста</li>
			)}
			<li className='collection-item active pink lighten-1'>
				Общая стоимость: {totalPrice} руб.
			</li>
			<li className='collection-item'>
				<button className='btn btn-small pink lighten-1'>Оформить</button>
			</li>
			<i
				className='material-icons basket-close'
				onClick={handleBasketShow}
			>
				Выйти
			</i>
		</ul>
	);
}