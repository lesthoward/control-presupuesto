import React from 'react'
import Spending from './Spending';

const List = ({spendingArr}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>List</h2>
            {spendingArr.map(singleSpending => (
                <Spending
                    key={singleSpending.id}
                    singleSpending={singleSpending}
                />
            ))}
        </div>
     );
}
 
export default List;