import React, { useContext } from 'react';
import { BasketItem } from './BasketItem';
import { ShopContext } from '../context';

export default function BasketList() {
	const { order = [], handleBasketShow } = useContext(ShopContext);

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