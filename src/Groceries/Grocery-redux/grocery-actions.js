import * as actionTypes from "./grocery-types";

export const itemDone = (itemID) => {
  return {
    type: actionTypes.ITEM_DONE,
    payload: {
        id: itemID
    }
  };
};
