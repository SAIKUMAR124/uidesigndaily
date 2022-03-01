import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemDone } from "../Grocery-redux/grocery-actions";
import { BiRadioCircle } from "react-icons/bi";

const GroceriesItems = () => {
  const items = useSelector((state) => state.grocery.items);
  const dispatch = useDispatch();

  return (
    <div className="gro-items">
      {items.map((it) => {
        return (
          <div key={it.id}>
            <div
              className="gro-item-btn"
              onClick={() => dispatch(itemDone(it.id))}
            >
              <div className="radio-icon">
                <BiRadioCircle />
              </div>
              <div className="item-text"> {it.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroceriesItems;
