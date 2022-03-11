import * as actionTypes from './grocery-types'

const INITIAL_STATE = {
    items: [
        {
            id:1,
            name: 'Apples',
        },
        {
            id:2,
            name: 'Mangos',
        },
        {
            id:3,
            name: 'Oranges',
        },
    ],
    itemsCompleted: []
};

const groceryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ITEM_DONE:
            const item = state.items.find((it) => it.id === action.payload.id);
            return {
                ...state,
                items: state.items.filter((it)=> it.id !== action.payload.id),
                itemsCompleted: [...state.itemsCompleted, {...item}]
            }
        case actionTypes.ADD_ITEM:
            let addItemData = {
                id: action.payload.id,
                name: action.payload.name
            }

            return {
                ...state,
                items: [...state.items, {...addItemData}]
            }
        default:
            return state;
    }
}

export default groceryReducer;