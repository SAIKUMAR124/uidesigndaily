import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineCheckCircle } from "react-icons/ai";

const GroceriesCompleted = () => {
  const itemsDone = useSelector((state) => state.grocery.itemsCompleted);

  return (
    <div>
      {itemsDone.length > 0 ? (
        <div>
          <div>Groceries Completed</div>
          <div>
            {itemsDone.map((item) => {
              return (
                <div
                  key={item.id}
                  className="gro-item-btn"
                  style={{ color: "green" }}
                >
                  <div className="radio-icon">
                    <AiOutlineCheckCircle />
                  </div>
                  <div className="item-text">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>No items completed</div>
      )}
    </div>
  );
};

export default GroceriesCompleted;
