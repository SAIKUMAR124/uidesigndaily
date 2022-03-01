import React from "react";
import { BsThreeDots } from "react-icons/bs";
import GroceriesItems from './GroceriesItems';
import GroceriesCompleted from './GroceriesCompleted';

const GroceriesCard = () => {
  return (
    <div className="gro-card">
      <div className="gro-heading">
        <h1>Groceries</h1>
        <div>
          <BsThreeDots />
        </div>
      </div>
      <div>share count</div>
      <GroceriesItems />
      <GroceriesCompleted />
      <div>+</div>
    </div>
  );
};

export default GroceriesCard;
