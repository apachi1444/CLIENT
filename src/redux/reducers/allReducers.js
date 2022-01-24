import { combineReducers } from "redux";
import pager from "./pager";
const allReducers=combineReducers({
    pager: pager
});

export default allReducers;