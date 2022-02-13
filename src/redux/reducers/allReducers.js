import { combineReducers } from "redux";
import pager from "./pager";
import currentCity from "./currentCity";
import browser from "./browser";

const allReducers=combineReducers({
    pager,
    currentCity,
    browser
});

export default allReducers;