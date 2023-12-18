import React from 'react';
import Button from '../Button/Button';
import './ProductItem.css';

const ProductItem = ({ product, onAdd, onRemove, className }) => {

	const onAddHandler = () => {
		onAdd(product);
	}
	
	return (
		<div className={'product' + className}>
			<div className={'img'} />
			<div className={'title'}>{product.title}</div>
			<div className={'description'}>{product.description}</div>
			<div className={'price'}>
				<span>Стоимость: <b>{product.price}</b></span>
			</div>
			<Button
				onClick={onAddHandler}
				className={'add-btn'}
			>
				Добавить в корзину
			</Button>
		</div>
	)
}
export default ProductItem;