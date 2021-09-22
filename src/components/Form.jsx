import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Error from './Error';
const Form = ({ setSpending, setSpendingStatus }) => {
	const [name, setName] = useState('');
	const [quantity, setQuantity] = useState(0);
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
			return setError('Invalid format or empty field');
		}

		setError(false);
		const spending = {
			name,
			quantity,
			id: nanoid(10),
		};
		setSpending(spending);
		setSpendingStatus(true);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add spending</h2>
			{error ? <Error message={error} /> : null}
			<div className="campo">
				<label htmlFor="Name"></label>
				<input
					type="text"
					className="u-full-width"
					placeholder="Shopping"
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="campo">
				<label htmlFor="Quantity"></label>
				<input
					type="text"
					className="u-full-width"
					placeholder="300"
					onChange={(e) => setQuantity(Number(e.target.value))}
				/>
			</div>

			<button type="submit" className="button-primary u-full-width">
				Add now
			</button>
		</form>
	);
};

export default Form;
