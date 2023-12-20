import jeans from '../img/jeans.jpg';
import tShirt from '../img/t-shirt.jpg';
import cShirt from '../img/c-shirt.jpg';
import rDress from '../img/r-dress.jpg';
import jacket from '../img/jacket.jpg';
import shorts from '../img/shorts.jpg';
import sweater from '../img/sweater.jpg';
import trousers from '../img/trousers.jpg';

export const products = [
	{
		id: '1',
		title: 'Джинсы',
		description: 'Синего цвета, прямые',
		img: jeans,
		sizes: ['S', 'M', 'L', 'XL'],
		price: 55,
	},
	{
		id: '2',
		title: 'Футболка',
		description: 'Белая, короткий рукав',
		img: tShirt,
		sizes: ['S', 'M', 'L'],
		price: 15,
	},
	{
		id: '3',
		title: 'Куртка',
		description: 'Черная, ветрозащитная',
		img: jacket,
		sizes: ['S', 'L', 'XL'],
		price: 90,

	},
	{
		id: '4',
		title: 'Шорты',
		description: 'Спортивные, черные',
		img: shorts,
		sizes: ['S', 'M', 'L', 'XL'],
		price: 20,
	},
	{
		id: '5',
		title: 'Рубашка',
		description: 'Клетчатая, длинный рукав',
		img: cShirt,
		sizes: ['L', 'XL'],
		price: 30,

	},
	{
		id: '6',
		title: 'Платье',
		description: 'Красное, вечернее',
		img: rDress,
		sizes: ['M', 'XL'],
		price: 70,

	},
	{
		id: '7',
		title: 'Свитер',
		description: 'Серый, вязаный',
		img: sweater,
		sizes: ['S', 'M', 'L'],
		price: 40,
	},
	{
		id: '8',
		title: 'Брюки',
		description: 'Светло-серые, классические',
		img: trousers,
		sizes: ['S', 'M', 'L', 'XL'],
		price: 35,
	},
];