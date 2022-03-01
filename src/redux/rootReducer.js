import { combineReducers } from "redux";
import groceryReducer from "../Groceries/Grocery-redux/grocery-reducers";

const rootReducer = combineReducers({
    grocery: groceryReducer,
})

export default rootReducer;