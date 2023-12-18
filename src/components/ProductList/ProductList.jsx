import React, { useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../../hooks/useTelegram';
import { products } from '../../data/products';
import './ProductList.css';

const getTotalPrice = (items) => {
	return items.reduce((acc, item) => {
		return acc += item.price;
	}, 0);
}

const ProductList = () => {
	const [addedItems, setAddedItems] = useState([]);
	const { tg } = useTelegram();

	const updateButton = (items) => {
		if (items.length === 0) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
			tg.MainButton.setParams({
				text: `Купить за ${getTotalPrice(items)}`
			});
		}
	}

	const onAdd = (product) => {
		let newItems = [];
		const alreadyAdded = addedItems.find(item => item.id === product.id);

		if (alreadyAdded) {
			newItems = addedItems.filter(item => item.id !== product.id);
		} else {
			newItems = [...addedItems, product];
		}
		
		setAddedItems(newItems);
		updateButton(newItems);
	}

	const onRemove = (product) => {
		
	}

	return (
		<div className={'list'}>
			{products.map(item => {
				<ProductItem
					product={item}
					onAdd={onAdd}
					onRemove={onRemove}
					className={'item'}
				/>
			})}
		</div>
	)
}
export default ProductList;