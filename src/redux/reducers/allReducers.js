import { combineReducers } from "redux";
import pager from "./pager";
import currentCity from "./currentCity";
import browser from "./browser";
import messanger  from "./messanger";
import user from './user';
import post from "./post";

const allReducers=combineReducers({
    pager,
    currentCity,
    browser,
    messanger,
    user,
    post
});

export default allReducers;