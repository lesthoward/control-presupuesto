import React, { Fragment } from 'react'
import { checkBudget } from '../Helpers';


const BudgetControl = ({budget, remaining}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Budget: {budget}
            </div>
            <div className={checkBudget(budget, remaining)}>
                Remaining: {remaining}
            </div>
        </Fragment>
     );
}
 
export default BudgetControl;