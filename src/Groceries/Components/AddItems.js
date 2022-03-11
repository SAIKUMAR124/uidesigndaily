import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, itemDone } from "../Grocery-redux/grocery-actions";

const AddItems = () => {
  const list = useSelector((state) => state.grocery.items);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");
  const [data, setData] = useState({id: list.length + 1, name: ''});

  const handleSubmit=()=>{
    setData({
      name: itemName,
    })
    console.log(itemName)
    dispatch(addItem(data))
    setOpen(false)
    setItemName('')
  }

  return (
    <div className="plus-sign">
      <button onClick={() => setOpen(true)} className="plus-sign-btn">
        <AiOutlinePlus />
      </button>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <h3 style={{ marginTop: "20px" }}>Please enter the item to add</h3>

        <label htmlFor="item">
          Item :
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <button onClick={() => handleSubmit()}>Submit</button>
      </Modal>
    </div>
  );
};

export default AddItems;
