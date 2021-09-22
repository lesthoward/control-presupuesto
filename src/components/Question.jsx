import React, { Fragment, useState } from 'react';
import Error from './Error';
const Question = ({setbudget, setremaining, setshowQuestion}) => {
    const [quantity, setquantity] = useState(0)
    const [error, setError] = useState(false)

    const setBudget = ({target}) => {
        setquantity(Number(target.value))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(quantity < 1 || isNaN(quantity)) {
            return setError(true)
        }
        setbudget(quantity)
        setremaining(quantity)
        setError(false)
        setshowQuestion(false)
    }

	return (
		<Fragment>
			<h2>What's your budget</h2>

            {error ?  <Error message="An error occured, set a valid number"/> : null}

			<form
                onSubmit={handleSubmit}
            >
				<input
					type="number"
					className="u-full-width"
					placeholder="For example: $1500"
                    onChange={setBudget}
				/>

				<input type="submit" className="button-primary u-full-width" value="Set budget"/>
			</form>
		</Fragment>
	);
};

export default Question;
