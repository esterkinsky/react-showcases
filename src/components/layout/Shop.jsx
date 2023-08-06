import React, { useState, useEffect, useContext } from 'react';
import { API_URL, API_KEY } from '../../config';
import Preloader from '../Preloader';
import GoodsList from '../GoodsList';
import { Cart } from '../Cart';
import BasketList from '../BasketList';
import Alert from '../Alert';
import { ShopContext } from '../../context';

export default function Shop() {

	const {  setGoods, loading, order, isBasketShow, alertName } = useContext(ShopContext);

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				data.shop && setGoods(data.shop)
			})
			.catch(err => {
				console.error(err);
			})
	}, []);

	return <>
		<main className='container content'>
			<Cart quantity={order.length} />
			{
				loading ? <Preloader /> : <GoodsList  />
			}
			{isBasketShow && (
				<BasketList
				/>
			)}
			{alertName && <Alert   />}
		</main>
	</>
}