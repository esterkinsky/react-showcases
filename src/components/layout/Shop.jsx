import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';
import Preloader from '../Preloader';
import GoodsList from '../GoodsList';
import { Cart } from '../Cart';
import BasketList from '../BasketList';
import Alert from '../Alert'

export default function Shop() {

	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isBasketShow, setBasketShow] = useState(false);
	const [alertName, setAlertName] = useState('');

	const addToBasket = (item) => {
		const itemIndex = order.findIndex(
			(orderItem) => orderItem.mainId === item.mainId
		);
		if (itemIndex === -1) {
			const newItem = {
				...item,
				quantity: 1,
			};
			setOrder([...order, newItem]);
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1,
					};
				} else {
					return orderItem;
				}
			});
			setOrder(newOrder);
		}
		setAlertName(item.displayName);
	};

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				data.shop && setGoods(data.shop);
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				setLoading(false);
			})
	}, []);

	const handleBasketShow = () => {
		setBasketShow(!isBasketShow);
	};

	const removeFromBasket = (mainId) => {
		console.log(mainId)
		const newOrder = order.filter((el) => el.mainId !== mainId);
		setOrder(newOrder);
	};

	const incQuantity = (mainId) => {
		const newOrder = order.map((el) => {
			if (el.mainId === mainId) {
				const newQuantity = el.quantity + 1;
				return {
					...el,
					quantity: newQuantity,
				};
			}
			return el;
		});
		setOrder(newOrder);
	};

	const decQuantity = (mainId) => {
		const newOrder = order.map((el) => {
			if (el.mainId === mainId && el.quantity !== 1) {
				const newQuantity = el.quantity - 1;
				return {
					...el,
					quantity: newQuantity >= 0 ? newQuantity : 0,
				};
			}
			return el;
		});
		setOrder(newOrder);
	};

	const closeAlert = () => {
		setAlertName('');
		console.log('hi from alert')
	};

	return <>
		<main className='container content'>
			<Cart quantity={order.length} handleBasketShow={handleBasketShow} />
			{
				loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />
			}
			{isBasketShow && (
				<BasketList
					order={order}
					handleBasketShow={handleBasketShow}
					removeFromBasket={removeFromBasket}
					incQuantity={incQuantity}
					decQuantity={decQuantity}
				/>
			)}
			{alertName && <Alert displayName={alertName} closeAlert={closeAlert} />}
		</main>
	</>
}