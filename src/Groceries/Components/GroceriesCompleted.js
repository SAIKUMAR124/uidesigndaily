import React from 'react'
import { useSelector } from 'react-redux';

const GroceriesCompleted = () => {
    const itemsDone = useSelector((state)=> state.grocery.itemsCompleted);

  return (
    <div>
        <div>Groceries Completed</div>
        <div>{itemsDone.map((item)=>{
            return <div key={item.id}>{item.name}</div>
        })}</div>
    </div>
  )
}

export default GroceriesCompleted