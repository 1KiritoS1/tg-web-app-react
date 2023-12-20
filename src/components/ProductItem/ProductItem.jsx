import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product, onAdd, className }) => {
	const onAddHandler = () => {
		onAdd(product);
	}
	
	// const onRemoveHandler = () => {
	// 	onRemove(product);
	// }

	return (
		<div className={className}>
			<div className={'item-top'}>
				<div className={'img'}>
					<img src={product.img} />
				</div>
				<div className={'info'}>
					<div className={'info-inner'}>
						<span className={'name'}>{product.title}</span>
						<span className={'desc'}>{product.description}</span>
					</div>
					<div className={'size'}>
						Доступные размеры : <span>{product.sizes.join(', ')}</span>
					</div>
				</div>
			</div>
			<div className={'item-bottom'}>
				<div className={'bg'}>
					<div className={'bg-inner'}></div>
				</div>
				<button 
					onClick={onAddHandler}
					className={'cart'}
				>
					<span className={'price'}>${product.price}</span>
					<span className={'add-to-cart'}>
						<span>Добавить в корзину</span>
					</span>
				</button>
			</div>
		</div>
	)
}
export default ProductItem;