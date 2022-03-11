import React from "react";
import { BsThreeDots } from "react-icons/bs";
import GroceriesItems from "./GroceriesItems";
import GroceriesCompleted from "./GroceriesCompleted";
import AddItems from "./AddItems";

const GroceriesCard = () => {
  return (
    <div className="gro-card">
      <div className="gro-heading">
        <h1>Groceries</h1>
        <div>
          <BsThreeDots />
        </div>
      </div>
      <div>share with 1 person</div>
      <GroceriesItems />
      <GroceriesCompleted />
      {/* <AddItems /> */}
    </div>
  );
};

export default GroceriesCard;
