import { combineReducers } from "redux";
import pager from "./pager";
import currentCity from "./currentCity";

const allReducers=combineReducers({
    pager,
    currentCity
});

export default allReducers;