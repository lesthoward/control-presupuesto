import React from 'react'
const Spending = ({singleSpending}) => (
    <li className="gastos">
        <p>
            {singleSpending.name}
            <span className="gasto">$ {singleSpending.quantity}</span>
        </p>
    </li>
)
 
export default Spending;