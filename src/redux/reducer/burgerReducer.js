import {
  //   INCREASE_AMOUNT,
  //   DECREASE_AMOUNT,
  ADD_BREAD_MID,
} from "../constants/burgerConstant";
const initialState = {
  burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]

  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },

  total: 85,
};

function burgerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BREAD_MID:
        console.log(action);
      let { food, amount } = action;
      if (amount === -1 && state.burger[food] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[food] += amount;
      state.burger = burgerUpdate;
      //Total
      state.total += amount * state.menu[food]
      return { ...state };

    default:
      return { ...state };
  }
}

export default burgerReducer;
