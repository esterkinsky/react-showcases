import { useContext } from 'react'
import { ShopContext } from '../context';

export default function GoodsItem(props) {

	const {
		mainId,
		displayName,
		displayDescription,
		price,
		displayAssets,
	} = props;

	const { addToBasket } = useContext(ShopContext);
	const busketPrice = price.regularPrice;

	return <>
		<div className='card' >
			<div className='card-image'>
				<img src={displayAssets[0].full_background} alt={displayName} />
			</div>
			<div className='card-content'>
				<span className='card-title'>{displayName}</span>
				<p>{displayDescription}</p>
			</div>
			<div className='card-action'>
				<button
					className='btn pink lighten-1'
					onClick={() =>
						addToBasket({
							mainId,
							displayName,
							price: busketPrice,
						})
					}
				>
					Купить
				</button>
				<span className='right' style={{ fontSize: '1.8rem' }}>{busketPrice} руб.</span>
			</div>
		</div>
	</>;
}