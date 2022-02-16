import { combineReducers } from "redux";
import pager from "./pager";
import currentCity from "./currentCity";
import browser from "./browser";
import messanger  from "./messanger";

const allReducers=combineReducers({
    pager,
    currentCity,
    browser,
    messanger
});

export default allReducers;