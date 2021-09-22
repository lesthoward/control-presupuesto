import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import Error from './components/Error';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

const App = () => {
	const [budget, setbudget] = useState(0);
	const [remaining, setremaining] = useState(0);
	const [showQuestion, setshowQuestion] = useState(true);
	const [spendingArr, setSpendingArr] = useState([]);
	const [error, setError] = useState(false);
	const [spending, setSpending] = useState({});
	const [spendingStatus, setSpendingStatus] = useState(false);
	// Wach For Spending Changes
	useEffect(() => {
		setError(false)
		// Show Errors
		const exist = spendingArr.some(spend => spend.name === spending.name)
        console.log('file: App.js ~ line 21 ~ useEffect ~ exist', exist)
		if(exist) {
			return setError('Don\'t add duplicate spendings')
		}

		// Add Spending Into Array
		if (spendingStatus) {
			setSpendingArr([...spendingArr, spending]);
			
			const budgetRemaining = remaining - spending.quantity
			setremaining(budgetRemaining)
		}
	}, [spending]);

	return (
		<div className="container">
			<header>
				<h1>Spending of the week</h1>
				<div className="contenido-principal contenido">
					{error ? <Error message={error} /> : null}
					{showQuestion ? (
						<Question
							setbudget={setbudget}
							setremaining={setremaining}
							setshowQuestion={setshowQuestion}
						/>
					) : (
						<div className="row">
							<div className="one-half column">
								<Form 
									setSpending={setSpending}
									setSpendingStatus={setSpendingStatus} 
								/>
							</div>
							<div className="one-half column">
								<List spendingArr={spendingArr} />
								<BudgetControl
									budget={budget}
									remaining={remaining}
								/>
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
};

export default App;
