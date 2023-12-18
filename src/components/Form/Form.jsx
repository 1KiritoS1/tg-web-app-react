import React, { useCallback, useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {
	const [street, setStreet] = useState('');
	const [country, setCountry] = useState('');
	const [subject, setSubject] = useState('physical');
	const { tg } = useTelegram();

	const onSendData = useCallback(() => {
		const data = {
			country,
			street,
			subject
		}
		tg.sendData(JSON.stringify(data));
	}, [country, street, subject]);

	useEffect(() => {
		tg.onEvent('mainButtonClicked', onSendData);
		return () => {
			tg.offEvent('mainButtonClicked', onSendData);
		}
	}, []); 

	useEffect(() => {
		tg.MainButton.setParams({
			text: 'Отправить данные'
		})
	}, []);

	useEffect(() => {
		if (!street || !country) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
	}, [country, street]);

	const onChangeStreet = (e) => {
		setStreet(e.target.value);
	}

	const onChangeCountry = (e) => {
		setCountry(e.target.value);
	}

	const onChangeSubject = (e) => {
		setSubject(e.target.value);
	}

	return (
		<div className={'form'}>
			<h3>Введите ваши данные</h3>
			<input
				type="text"
				value={country}
				onChange={onChangeCountry}
				className={'input'}

			/>
			<input
				type="text"
				value={street}
				onChange={onChangeStreet}
				className={'input'}
			/>
			<select
				value={subject}
				onChange={onChangeSubject}
				className={'select'}
			>
				<option value={'physical'}>Физ. лицо</option>
				<option value={'legal'}>Юр. лицо</option>
			</select>
		</div>
	)
}
export default Form;