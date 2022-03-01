import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemDone } from "../Grocery-redux/grocery-actions";

const GroceriesItems = () => {
  const items = useSelector((state) => state.grocery.items);
    const dispatch = useDispatch();

  return (
    <div>
      {items.map((it) => {
        return <div key={it.id}>
            <div onClick={()=> dispatch(itemDone(it.id))}>{it.name}</div>
        </div>;
      })}
    </div>
  );
};

export default GroceriesItems;
