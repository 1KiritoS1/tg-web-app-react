import React, { useCallback, useEffect, useState } from 'react';
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

	const onSendData = useCallback(() => {
		const data = {
			products: addedItems,
			totalPrice: getTotalPrice(addedItems)
		}
		fetch('http://localhost:8000', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		});
	}, []);

	useEffect(() => {
		tg.onEvent('mainButtonClicked', onSendData);
		return () => {
			tg.offEvent('mainButtonClicked', onSendData);
		}
	}, [onSendData]); 

	const updateButton = (items) => {
		if (items.length === 0) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
			tg.MainButton.setParams({
				text: `Купить за $${getTotalPrice(items)}`
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

	// const onRemove = (product) => {
	// 	let newItems = [];
	// 	newItems = addedItems.filter(item => item.id !== product.id);

	// 	setAddedItems(newItems);
	// }

	return (
		<div className={'list'}>
			{products.map(item => (
				<ProductItem
					key={item.id}
					product={item}
					className={'item'}
					onAdd={onAdd}
					// onRemove={onRemove}
				/>
			))}
		</div>
	)
}
export default ProductList;