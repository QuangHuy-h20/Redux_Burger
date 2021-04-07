//rootReducer manages all child reducers

import { combineReducers } from "redux";

//Import child reducers

import burgerReducer from "./burgerReducer";

const rootReducer = combineReducers({
  //declare child reducers
  burger: burgerReducer,
});

export default rootReducer;
