import React, { useContext } from 'react';
import { ShopContext } from '../context';


function Cart() {

	const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);


	let sum = 0;
	order.forEach((item) => {
		sum += item.quantity
	});


	return (
		<div
			className='cart pink lighten-1 white-text'
			onClick={handleBasketShow}
		>
			<i className='tiny material-icons'>shopping_cart</i>
			{sum ? (
				<span className='cart-quantity'>{'(' + sum + ')'}</span>
			) : null}
		</div>
	);
}

export { Cart };