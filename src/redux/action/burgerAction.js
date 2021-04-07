import { ADD_BREAD_MID } from "../constants/burgerConstant";

export const addBreadMid = (food, amount) => {
  return {
    type: ADD_BREAD_MID,
    food,
    amount,
  };
  
};
